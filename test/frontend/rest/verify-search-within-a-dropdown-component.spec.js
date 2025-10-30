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
  await page.getByRole('link', { name: 'Industry Icon Casino Resorts' }).click();
  await page.getByText('Uncover challenges and areas').nth(4).click();
  await page.getByRole('button', { name: 'Budget/Price Concerns' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('res');
  await expect(page.getByRole('button', { name: 'Resource Requirements' })).toBeVisible();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();