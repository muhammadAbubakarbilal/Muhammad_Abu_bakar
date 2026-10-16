const { chromium } = require("../.qa/node_modules/playwright");
const AxeBuilder = require("../.qa/node_modules/@axe-core/playwright").default;
const fs = require("fs");
(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  try {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    const results = [];
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    fs.mkdirSync("docs/qa/launchfolio-local", { recursive: true });
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const route of [
        "/",
        "/work",
        "/systems",
        "/about",
        "/contact",
        "/insights",
        "/faq",
        "/work/agency-lead-operations",
      ]) {
        const r = await page.goto("http://127.0.0.1:3201" + route);
        await page.evaluate(() => document.fonts.ready);
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth + 1,
        );
        results.push({ width, route, status: r.status(), overflow });
        if (route === "/" || route === "/contact") {
          await page.evaluate(async () => {
            for (let y = 0; y < document.body.scrollHeight; y += 800) {
              scrollTo(0, y);
              await new Promise((r) => setTimeout(r, 60));
            }
            scrollTo(0, 0);
          });
          await page.waitForTimeout(500);
          await page.screenshot({
            path: `docs/qa/launchfolio-local/${route === "/" ? "home" : "contact"}-${width}.png`,
            fullPage: true,
          });
        }
        if (width === 390 && route === "/") {
          await page.getByRole("button", { name: "Open navigation" }).click();
          if (
            !(await page
              .getByRole("navigation", { name: "Main navigation" })
              .isVisible())
          )
            throw Error("Menu failed");
          await page.keyboard.press("Escape");
          await page.locator("summary").first().click();
          if (
            (await page.locator("details").first().getAttribute("open")) ===
            null
          )
            throw Error("FAQ failed");
        }
        if (width === 1440 && ["/", "/contact", "/systems"].includes(route)) {
          const axe = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa"])
            .analyze();
          results.push({
            route,
            axe: axe.violations.map((v) => ({
              id: v.id,
              nodes: v.nodes.map((n) => ({
                target: n.target,
                summary: n.failureSummary,
              })),
            })),
          });
        }
      }
    }
    await page.goto('http://127.0.0.1:3201/');
    await page.getByRole('button',{name:'Ask about a project'}).click();
    await page.getByRole('dialog').waitFor();
    await page.keyboard.press('Escape');
    await page.getByRole('dialog').waitFor({state:'hidden'});
    results.push({assistantEscape:true});
    fs.writeFileSync(
      "docs/qa/launchfolio-local/results.json",
      JSON.stringify({ results, errors }, null, 2),
    );
    console.log(
      JSON.stringify(
        {
          checks: results.length,
          issues: results.filter(
            (r) => r.overflow || r.status >= 400 || r.axe?.length,
          ),
          errors,
        },
        null,
        2,
      ),
    );
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
