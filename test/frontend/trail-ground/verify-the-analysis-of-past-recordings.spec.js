import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Talk Vision').click();
  await page.getByRole('button', { name: 'History' }).click();
  await page.getByTestId('button').nth(4).click();
  await page.locator('.control-buttons > button').first().click();
  await page.getByRole('button', { name: 'Score this conversation' }).click();
  await expect(page.getByRole('heading', { name: 'Analyzing Your Performance...' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Meeting Details' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Overall Score' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Section Scores' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Summary' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'What You Did Well' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Areas for Improvement' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Detailed Analysis' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Contact Information (1)' })).toBeVisible();
  await page.locator('.back-button').click();
  await page.getByTestId('button').nth(1).click();
});