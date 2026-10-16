const { chromium } = require("../.qa/node_modules/playwright");
const fs = require("node:fs");

(async () => {
  fs.mkdirSync("docs/qa/baseline", { recursive: true });
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const page = await browser.newPage();
  for (const [name, url] of [
    ["local", "http://127.0.0.1:3100"],
    ["live", "https://abubakarbilal.netlify.app/"],
    ["reference", "https://creatorcut.framer.website/"],
  ]) {
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
        await page.screenshot({
          path: `docs/qa/baseline/${name}-${width}.png`,
          fullPage: true,
        });
        console.log(
          name,
          width,
          "captured",
          (await page.locator("body").innerText()).split(/\s+/).length,
          "words",
        );
      } catch (error) {
        console.log(name, width, error.message);
      }
    }
  }
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
