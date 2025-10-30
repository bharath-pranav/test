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
  await page.getByText('Leaderboard').click();
  await page.getByRole('cell', { name: 'Name' }).click();
  await expect(page.locator('thead')).toMatchAriaSnapshot(`- paragraph: ↑`);
  await page.getByText('Name↑').click();
  await expect(page.locator('thead')).toMatchAriaSnapshot(`- paragraph: ↓`);
  await page.getByText('Name↓').click();
  await page.getByRole('cell', { name: 'Name' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();