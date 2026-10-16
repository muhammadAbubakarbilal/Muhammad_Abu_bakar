const { chromium } = require("../.qa/node_modules/playwright");
(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const page = await browser.newPage({ reducedMotion: "reduce" });
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: width < 600 ? 844 : 1000 });
    for (const route of [
      "/",
      "/work",
      "/systems",
      "/about",
      "/contact",
      "/process",
      "/work/agency-lead-operations",
    ]) {
      await page.goto("http://127.0.0.1:3201" + route, {
        waitUntil: "networkidle",
      });
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 600) {
          scrollTo({ top: y, behavior: "instant" });
          await new Promise((r) => setTimeout(r, 100));
        }
        scrollTo({ top: 0, behavior: "instant" });
      });
      await page.waitForTimeout(500);
      const name = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
      await page.screenshot({
        path: `docs/qa/final/${name}-${width}.png`,
        fullPage: true,
      });
      if (route === "/")
        await page.screenshot({ path: `docs/qa/final/hero-${width}.png` });
    }
    console.log("Screenshots with lazy media loaded:", width);
  }
  await page.setViewportSize({ width: 1440, height: 850 });
  await page.goto("http://127.0.0.1:3201", { waitUntil: "networkidle" });
  await page.screenshot({ path: "public/assets/portfolio-studio.png" });
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
