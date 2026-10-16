const { chromium } = require("../.qa/node_modules/playwright");
const fs = require("fs");
const assert = require("node:assert/strict");
(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  try {
    const results = [];
    fs.mkdirSync("docs/qa/motion", { recursive: true });
    for (const reducedMotion of ["no-preference", "reduce"]) {
      const context = await browser.newContext({
        viewport: { width: 1440, height: 1000 },
        reducedMotion,
      });
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto("http://127.0.0.1:3201/");
      await page.waitForTimeout(3500);
      assert.equal(await page.locator('.lf-hero p').evaluate(e=>getComputedStyle(e).opacity),'1');
      assert.equal(await page.locator('.lf-hero h1').evaluate(e=>getComputedStyle(e.lastElementChild).color),'rgb(8, 8, 8)');
      const state = () =>
        page.evaluate(() => ({
          project: getComputedStyle(document.querySelector(".lf-project"))
            .transform,
          word: document.querySelector(".lf-motion-word")?.textContent,
          ticker: getComputedStyle(document.querySelector(".lf-ticker-track"))
            .animationName,
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
        }));
      const top = await state();
      await page.screenshot({
        path: `docs/qa/motion/hero-${reducedMotion}.png`,
      });
      assert.equal(top.overflow, false);
      await page.evaluate(() => scrollTo({ top: 900, behavior: "instant" }));
      await page.waitForTimeout(1500);
      const scrolled = await state();
      if (reducedMotion === "no-preference") {
        assert.notEqual(top.project, scrolled.project);
        assert.ok(top.word);
        assert.equal(top.ticker, "lf-marquee");
      } else {
        assert.equal(top.project, "none");
        assert.equal(top.word, undefined);
        assert.equal(top.ticker, "none");
      }
      await page.screenshot({
        path: `docs/qa/motion/work-${reducedMotion}.png`,
      });
      await page.locator("summary").first().click();
      assert.notEqual(
        await page.locator("details").first().getAttribute("open"),
        null,
      );
      await page.getByRole("link", { name: "All articles" }).click();
      await page.waitForURL("**/insights");
      await page
        .getByRole("link", { name: "Muhammad Abu Bakar", exact: true })
        .first()
        .click();
      await page.waitForURL("http://127.0.0.1:3201/");
      await page.waitForTimeout(1500);
      assert.equal(
        await page.locator("h1").innerText(),
        "Technology that\ndelivers results.",
      );
      await page.setViewportSize({ width: 390, height: 844 });
      await page.waitForTimeout(500);
      assert.equal(
        await page.evaluate(() =>
          document.documentElement.classList.contains("lf-project-motion"),
        ),
        false,
      );
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth + 1,
        ),
        false,
      );
      await page.getByRole("button", { name: "Open navigation" }).click();
      assert.equal(
        await page
          .getByRole("navigation", { name: "Main navigation" })
          .isVisible(),
        true,
      );
      await page.keyboard.press("Escape");
      assert.deepEqual(errors, []);
      results.push({
        reducedMotion,
        top,
        scrolled,
        routeCleanup: true,
        mobile: true,
        errors,
      });
      await context.close();
    }
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:3201/");
    assert.equal(await page.locator("h1").isVisible(), true);
    results.push({ noJavaScript: true });
    await context.close();
    fs.writeFileSync(
      "docs/qa/motion/results.json",
      JSON.stringify(results, null, 2),
    );
    console.log(
      "PASS motion, scroll reversal/state, reduced motion, route cleanup, mobile navigation, FAQ and no-JS checks",
    );
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
