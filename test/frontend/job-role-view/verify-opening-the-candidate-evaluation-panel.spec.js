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
  await page.getByRole('cell', { name: 'S Sharunikaa' }).click();
  await expect(page.locator('body')).toContainText('Overall Assessment Score');
  await expect(page.locator('body')).toContainText('Competency Breakdown');
  await expect(page.locator('body')).toContainText('Detailed Evaluation');
  await expect(page.locator('body')).toContainText('Audio Recording');
  await expect(page.locator('body')).toContainText('Evaluation');
});