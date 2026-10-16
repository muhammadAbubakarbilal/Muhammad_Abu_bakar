const { chromium } = require("../.qa/node_modules/playwright");
const AxeBuilder = require("../.qa/node_modules/@axe-core/playwright").default;
const fs = require("node:fs");
const assert = require("node:assert/strict");
const base = process.env.QA_URL || "http://127.0.0.1:3201";
const ts = require("../node_modules/typescript");
const data = {};
new Function(
  "exports",
  ts.transpileModule(fs.readFileSync("lib/data.ts", "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText,
)(data);
const routes = [
  "/",
  "/work",
  "/systems",
  "/about",
  "/process",
  "/contact",
  "/faq",
  "/insights",
  ...data.PROJECTS_DATA.map((p) => "/work/" + p.slug),
  ...data.INSIGHTS_DATA.map((p) => "/insights/" + p.slug),
];
const results = {
  routes: [],
  accessibility: [],
  interactions: [],
  browserErrors: [],
  links: [],
};
let browser;
(async () => {
  fs.mkdirSync("docs/qa/final", { recursive: true });
  browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  page.on("pageerror", (e) => results.browserErrors.push(e.message));
  const links = new Set();
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of width === 768 || width === 320
      ? ["/", "/contact", "/systems", "/work"]
      : routes) {
      const response = await page.goto(base + route, {
        waitUntil: "networkidle",
        timeout: 60000,
      });
      assert.equal(response.status(), 200, route);
      assert.equal(await page.locator("h1").count(), 1, route + " single h1");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      );
      assert.equal(overflow, false, route + " overflow at " + width);
      const brokenImages = await page
        .locator("img")
        .evaluateAll((imgs) =>
          imgs
            .filter((i) => i.complete && i.naturalWidth === 0)
            .map((i) => i.src),
        );
      assert.deepEqual(brokenImages, [], route + " images");
      results.routes.push({
        route,
        width,
        status: response.status(),
        overflow,
      });
      if (width === 1440) {
        for (const href of await page
          .locator("a[href]")
          .evaluateAll((as) => as.map((a) => a.getAttribute("href")))) {
          if (href.startsWith("/") || href.startsWith("#"))
            links.add(new URL(href, base + route).href);
        }
      }
      if (
        [
          "/",
          "/work",
          "/systems",
          "/about",
          "/process",
          "/contact",
          "/faq",
          "/insights",
          "/work/personal-engineering-studio",
          "/work/agency-lead-operations",
        ].includes(route)
      ) {
        await page.screenshot({
          path: `docs/qa/final/${route === "/" ? "home" : route.slice(1).replaceAll("/", "-")}-${width}.png`,
          fullPage: true,
        });
      }
      if (
        width === 390 &&
        [
          "/",
          "/contact",
          "/work",
          "/systems",
          "/about",
          "/faq",
          "/work/agency-lead-operations",
        ].includes(route)
      ) {
        const a = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        results.accessibility.push({
          route,
          violations: a.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            nodes: v.nodes.map((n) => n.target),
          })),
        });
      }
    }
    console.log("Viewport checked", width);
  }
  for (const href of links) {
    const url = new URL(href);
    const response = await page.request.get(url.href);
    assert.equal(response.status(), 200, href);
    if (url.hash) {
      await page.goto(url.origin + url.pathname);
      assert.ok(
        await page
          .locator("[id]")
          .evaluateAll(
            (els, id) => els.some((e) => e.id === id),
            decodeURIComponent(url.hash.slice(1)),
          ),
        href,
      );
    }
    results.links.push(href);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  await page.getByRole("button", { name: "Open navigation" }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Close navigation" })
      .getAttribute("aria-expanded"),
    "true",
  );
  await page.keyboard.press("Escape");
  assert.equal(
    await page
      .getByRole("button", { name: "Open navigation" })
      .getAttribute("aria-expanded"),
    "false",
  );
  assert.equal(
    await page.evaluate(() =>
      document.activeElement.getAttribute("aria-label"),
    ),
    "Open navigation",
  );
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Services" })
    .click();
  await page.waitForURL("**/systems");
  results.interactions.push(
    "Mobile menu open, Escape, focus restoration and navigation",
  );
  await page.goto(base);
  await page.getByRole("button", { name: "CRM", exact: true }).click();
  assert.match(
    await page.locator(".connection-detail").innerText(),
    /organized contact/,
  );
  await page.getByRole("button", { name: "Replay", exact: true }).click();
  results.interactions.push("Diagram selection and replay");
  await page
    .getByRole("button", { name: "Ask about a project", exact: true })
    .click();
  await page.getByRole("dialog").waitFor();
  await page.getByRole("button", { name: "I need a business website" }).click();
  await page
    .getByText("Local guidance · AI not connected", { exact: true })
    .waitFor();
  assert.match(
    await page.locator(".chat-assistant").last().innerText(),
    /website/,
  );
  await page.getByRole("button", { name: "Reset conversation" }).click();
  assert.equal(await page.locator(".chat-message").count(), 1);
  await page.keyboard.press("Escape");
  assert.equal(await page.getByRole("dialog").count(), 0);
  await page.waitForFunction(
    () => document.activeElement.id === "open-assistant-btn",
  );
  assert.equal(
    await page.evaluate(() => document.activeElement.id),
    "open-assistant-btn",
  );
  results.interactions.push(
    "Assistant local reply, reset, Escape and focus restoration",
  );
  await page.goto(base + "/contact");
  await page
    .getByRole("button", { name: "Prepare Email", exact: true })
    .click();
  assert.equal((await page.locator("input:invalid").count()) > 0, true);
  await page.getByLabel("Your name").fill("QA Visitor");
  await page
    .getByLabel("Email (required)", { exact: true })
    .fill("qa@example.com");
  await page.getByLabel("Project type").selectOption("Website / Landing Page");
  await page
    .getByLabel("What would you like")
    .fill("I would like to redesign my business website.");
  await page
    .getByRole("button", { name: "Prepare Email", exact: true })
    .click();
  await page
    .getByRole("heading", { name: "Your email draft is ready." })
    .waitFor();
  const mailto = await page
    .getByRole("link", { name: "Open Email Draft" })
    .getAttribute("href");
  assert.match(decodeURIComponent(mailto), /QA Visitor/);
  assert.match(
    await page.locator(".email-draft").innerText(),
    /has not been sent/,
  );
  results.interactions.push(
    "Required field validation and accurate email draft; no message sent",
  );
  const invalid = await page.request.post(base + "/api/contact", { data: {} });
  assert.equal(invalid.status(), 400);
  const valid = {
    name: "QA Visitor",
    email: "qa@example.com",
    projectType: "Website / Landing Page",
    description: "A test inquiry for validation only.",
  };
  assert.equal(
    (await page.request.post(base + "/api/contact", { data: valid })).status(),
    503,
  );
  assert.equal(
    (
      await page.request.post(base + "/api/contact", {
        data: { ...valid, companyFax: "bot" },
      })
    ).status(),
    400,
  );
  assert.equal(
    (
      await page.request.post(base + "/api/contact", {
        data: "{broken",
        headers: { "Content-Type": "application/json" },
      })
    ).status(),
    400,
  );
  assert.equal(
    (
      await page.request.post(base + "/api/assistant", {
        data: { userMessage: "" },
      })
    ).status(),
    400,
  );
  assert.equal(
    (await page.request.get(base + "/does-not-exist")).status(),
    404,
  );
  assert.equal(
    (await page.request.get(base + "/faqs", { maxRedirects: 0 })).status(),
    308,
  );
  assert.equal((await page.request.get(base + "/sitemap.xml")).status(), 200);
  assert.equal((await page.request.get(base + "/robots.txt")).status(), 200);
  results.interactions.push(
    "API validation, missing-delivery response, honeypot, malformed JSON, 404, FAQ redirect, sitemap and robots",
  );
  const nojs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const np = await nojs.newPage();
  await np.goto(base);
  assert.ok(await np.getByRole("heading", { level: 1 }).isVisible());
  assert.ok(
    await np
      .getByRole("link", { name: "View My Work", exact: true })
      .isVisible(),
  );
  results.interactions.push("Essential homepage visible without JavaScript");
  await nojs.close();
  const motion = await browser.newContext({
    reducedMotion: "no-preference",
    viewport: { width: 1440, height: 1000 },
  });
  const mp = await motion.newPage();
  mp.on("pageerror", (e) => results.browserErrors.push(e.message));
  await mp.goto(base, { waitUntil: "networkidle" });
  await mp.locator(".connection-diagram").scrollIntoViewIfNeeded();
  await mp.waitForTimeout(3300);
  await mp.getByRole("button", { name: "Replay", exact: true }).click();
  await mp.waitForTimeout(3300);
  assert.equal(await mp.locator(".connection-node").count(), 5);
  results.interactions.push("Normal-motion introduction and replay completed");
  await motion.close();
  await browser.close();
  fs.writeFileSync("docs/qa/results.json", JSON.stringify(results, null, 2));
  console.log(
    JSON.stringify(
      {
        routes: results.routes.length,
        links: results.links.length,
        accessibility: results.accessibility,
        browserErrors: results.browserErrors,
        interactions: results.interactions,
      },
      null,
      2,
    ),
  );
  assert.equal(results.browserErrors.length, 0, "Browser errors");
  assert.equal(
    results.accessibility.reduce((n, r) => n + r.violations.length, 0),
    0,
    "Accessibility violations",
  );
})().catch(async (e) => {
  fs.writeFileSync(
    "docs/qa/results.json",
    JSON.stringify({ ...results, failure: e.message }, null, 2),
  );
  console.error(e);
  await browser?.close();
  process.exitCode = 1;
});
