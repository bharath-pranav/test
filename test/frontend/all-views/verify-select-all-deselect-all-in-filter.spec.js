import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/shrijithj/Library/Application Support/aitest-case-generator/storage/storageState-project-1760440162877.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sparrow-ats.vercel.app/');
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.getByRole('img').nth(1).click();
  await page.getByRole('textbox', { name: 'Search jobs and views...' }).click();
  await page.getByRole('textbox', { name: 'Search jobs and views...' }).fill('all');
  await page.locator('div').filter({ hasText: /^all$/ }).click();
  await page.getByRole('button', { name: 'View Rounds' }).click();
  await page.getByRole('button', { name: 'All Jobs Selected' }).click();
  await page.getByRole('button', { name: 'Deselect All' }).click();
  await page.locator('html').click();
  await expect(page.getByRole('paragraph')).toContainText('Please select at least one job from the filter dropdown above to view rounds.');
  await page.getByRole('button', { name: 'of 17 Jobs' }).click();
  await page.getByRole('button', { name: 'Select All', exact: true }).click();
  await page.locator('html').click();
  await expect(page.locator('body')).toContainText('Radar Chart');
});