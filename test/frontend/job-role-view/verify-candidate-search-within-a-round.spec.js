import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/shrijithj/Library/Application Support/aitest-case-generator/storage/storageState-project-1760440162877.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sparrow-ats.vercel.app/');
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.locator('circle').first().click();
  await page.getByRole('textbox', { name: 'Search jobs and views...' }).click();
  await page.getByRole('textbox', { name: 'Search jobs and views...' }).fill('mock');
  await page.locator('div').filter({ hasText: /^Sales Mock$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'Search candidates by name or' }).click();
  await page.getByRole('textbox', { name: 'Search candidates by name or' }).fill('shar');
  await expect(page.locator('tbody')).toContainText('Sharunikaa');
});