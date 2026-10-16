const { chromium } = require("../.qa/node_modules/playwright");
const fs = require("node:fs");
(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const results = [];
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    await page.addInitScript(() => {
      window.__lab = { lcp: 0, cls: 0 };
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) window.__lab.lcp = e.startTime;
      }).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver((list) => {
        for (const e of list.getEntries())
          if (!e.hadRecentInput) window.__lab.cls += e.value;
      }).observe({ type: "layout-shift", buffered: true });
    });
    await page.goto("http://127.0.0.1:3201", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    const sample = await page.evaluate(() => ({
      ...window.__lab,
      domContentLoaded:
        performance.getEntriesByType("navigation")[0].domContentLoadedEventEnd,
    }));
    results.push({ width, ...sample });
    await page.close();
  }
  await browser.close();
  fs.writeFileSync(
    "docs/qa/lab-metrics.json",
    JSON.stringify(
      {
        note: "Single local Chrome run, no CPU/network throttling. Not field Core Web Vitals or a Lighthouse score; INP was not measured.",
        samples: results,
      },
      null,
      2,
    ),
  );
  console.log(results);
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
