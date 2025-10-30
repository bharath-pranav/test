import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Talk Vision').click();
  await page.getByRole('button', { name: 'History' }).click();
  await page.getByTestId('text').nth(2).click();
  await page.getByTestId('button').nth(2).click();
  await page.getByRole('button', { name: 'Score this conversation' }).click();
  await expect(page.getByRole('heading', { name: 'Analyzing Your Performance...' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Overall Score' })).toBeVisible();
  await page.locator('.back-button').click();
});