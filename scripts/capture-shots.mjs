import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";

const base = process.env.BASE_URL || "http://127.0.0.1:3002";
const outDir = path.resolve("preview-shots");
await mkdir(outDir, { recursive: true });

const pages = [
  ["home", "/"],
  ["timeline", "/timeline"],
  ["epochs", "/epochs"],
  ["exhibit-early-pc", "/exhibits/early-pc"],
  ["exhibit-network", "/exhibits/network-metaphor"],
  ["articles", "/articles"],
  ["compare", "/compare"],
  ["glossary", "/glossary"],
  ["about", "/about"],
  ["guide", "/guide"],
  ["gallery", "/gallery"],
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const [name, route] of pages) {
  const url = base + route;
  console.log("shot", name, url);
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(name.startsWith("exhibit") ? 2500 : 800);
  await page.screenshot({
    path: path.join(outDir, `${name}.png`),
    fullPage: true,
  });
}

await browser.close();
console.log("done", outDir);
