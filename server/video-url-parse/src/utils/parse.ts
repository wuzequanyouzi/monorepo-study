import puppeteer from 'puppeteer';
import { Browser } from 'puppeteer';

let browser: Browser;

const browserPromise = puppeteer.launch({
  product: 'chrome',
  headless: false,
});

async function getBrowser() {
  browser = await browserPromise;
  if (browser.isConnected()) {
    return browser;
  } else {
    browser.close();
    browser = await puppeteer.launch({
      product: 'chrome',
      headless: false,
    });
  }
  return browser;
}

export async function getVideoUrl(url: string) {
  const page = await (await getBrowser()).newPage();
  await page.goto(url);

  const videoUrl = await page.evaluate(() => {
    const video = document.querySelector('video');
    if (video) {
      return video.src;
    }
    return null;
  });
  page.close();
  return videoUrl;
}
