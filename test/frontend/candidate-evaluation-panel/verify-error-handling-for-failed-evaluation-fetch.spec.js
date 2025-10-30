import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/shrijithj/Library/Application Support/aitest-case-generator/storage/storageState-project-1760440162877.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sparrow-ats.vercel.app/');
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.getByRole('img').nth(1).click();
  await page.getByRole('textbox', { name: 'Search jobs and views...' }).click();
  await page.getByRole('textbox', { name: 'Search jobs and views...' }).fill('mock');
  await page.locator('div').filter({ hasText: /^Sales Mock$/ }).nth(3).click();
  await page.getByRole('cell', { name: 'S Shrijith' }).click();
  await page.getByRole('button', { name: 'Get Evaluation' }).click();
  await expect(page.locator('body')).toContainText('Assessment data not available. The candidate may not have completed the assessment yet, or the assessment data may not be accessible.');
});