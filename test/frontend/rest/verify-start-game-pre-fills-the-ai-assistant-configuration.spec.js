const { chromium } = require('playwright');
import { test, expect } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/auth-storage-1760082690451.json'
  });
  const page = await context.newPage();
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Training Arena').click();
  await page.getByRole('button', { name: 'Start Game' }).first().click();
  await expect(page.locator('div').filter({ hasText: /^Compliance & Data Security Focused \| Cue card$/ }).nth(2)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Apparel & Fashion or Furniture\.json$/ }).nth(2)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Eric$/ }).nth(2)).toBeVisible();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();