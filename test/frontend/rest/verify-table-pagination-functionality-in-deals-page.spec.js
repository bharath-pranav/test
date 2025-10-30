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
  await page.locator('div').filter({ hasText: /^Deals$/ }).nth(1).click();
  await expect(page.getByRole('main')).toContainText('Showing 1 to 20 of 179 entries');
  await page.getByTestId('button').nth(2).click();
  await expect(page.getByRole('main')).toContainText('Showing 21 to 40 of 179 entries');
  await page.getByTestId('button').nth(2).click();
  await expect(page.getByRole('main')).toContainText('Showing 41 to 60 of 179 entries');
  await page.getByTestId('button').nth(2).click();
  await expect(page.getByRole('main')).toContainText('Showing 61 to 80 of 179 entries');
  await page.getByTestId('button').nth(2).click();
  await expect(page.getByRole('main')).toContainText('Showing 81 to 100 of 179 entries');
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();