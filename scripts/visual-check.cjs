const { chromium } = require("../.qa/node_modules/playwright");
const fs = require("node:fs");
(async () => {
  fs.mkdirSync("docs/qa/final", { recursive: true });
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("http://127.0.0.1:3100", {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) {
        scrollTo({ top: y, behavior: "instant" });
        await new Promise((r) => setTimeout(r, 180));
      }
      scrollTo({ top: 0, behavior: "instant" });
    });
    await page.waitForTimeout(800);
    await page.screenshot({
      path: `docs/qa/final/home-${width}.png`,
      fullPage: true,
    });
    console.log(
      JSON.stringify({
        width,
        overflow: await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        words: (await page.locator("main").innerText()).split(/\s+/).length,
      }),
    );
  }
  for (const [name, url] of [
    ["reference", "https://creatorcut.framer.website/"],
    ["live", "https://abubakarbilal.netlify.app/"],
  ]) {
    try {
      await page.setViewportSize({ width: 1440, height: 1000 });
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForTimeout(2500);
      await page.screenshot({
        path: `docs/qa/final/${name}.png`,
        fullPage: false,
      });
      console.log(name, "captured");
    } catch (e) {
      console.log(name, e.message);
    }
  }
  console.log("Browser errors", JSON.stringify(errors));
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
