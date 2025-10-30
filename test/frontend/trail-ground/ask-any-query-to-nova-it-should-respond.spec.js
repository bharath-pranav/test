import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByRole('textbox', { name: 'Search Industry or Ask' }).click();
  await page.getByRole('textbox', { name: 'Search Industry or Ask' }).fill('hello');
  await page.getByRole('textbox', { name: 'Search Industry or Ask' }).press('Enter');
  await expect(page.locator('.max-w-2xl.bg-gray-100')).toBeVisible();
});