import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/shrijithj/Library/Application Support/aitest-case-generator/storage/storageState-project-1760440162877.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sparrow-ats.vercel.app/');
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.getByRole('img').nth(1).click();
  await page.getByTitle('Create new job').click();
  await page.getByRole('button', { name: 'Use a Template Pick from' }).click();
  await expect(page.locator('body')).toContainText('Job Opening Templates');
  await expect(page.locator('body')).toContainText('Select a Template');
  await page.getByRole('button', { name: 'Back', exact: true }).click();
  await page.getByRole('img').nth(1).click();
});