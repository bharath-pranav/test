import { test, expect } from '@playwright/test';

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://sales-ai-enabler.vercel.app/login');
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();