import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.locator('div').filter({ hasText: /^Upcoming meetings$/ }).nth(3).click();
  await page.getByTestId('input').fill('his');
  await expect(page.getByText('No meetings available')).toBeVisible();
});