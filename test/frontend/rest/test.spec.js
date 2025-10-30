import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByRole('link', { name: 'Industry Icon Casino Resorts' }).click();
  await page.getByTestId('flex').nth(4).click();
  await expect(page.getByText('Casino Resorts').nth(2)).toBeVisible();
});