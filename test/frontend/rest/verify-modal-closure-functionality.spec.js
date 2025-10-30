import { test, expect } from '@playwright/test';

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://sales-ai-enabler.vercel.app/login');
  await page.getByRole('button', { name: 'Email & Password' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('salestest@surveysparrow.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('SalesAI@!@#');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SalesAI@123');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.locator('.cursor-pointer.rounded-\\[20px\\]').first().click();
  // await expect(page.getByText('Pain Points').nth(2)).toBeVisible();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();