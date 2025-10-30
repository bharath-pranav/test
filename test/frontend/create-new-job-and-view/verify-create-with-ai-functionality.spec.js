import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/shrijithj/Library/Application Support/aitest-case-generator/storage/storageState-project-1760440162877.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sparrow-ats.vercel.app/');
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.getByRole('img').nth(1).click();
  await page.getByTitle('Create new job').click();
  await page.getByRole('button', { name: 'Create with AI Generate a JD' }).click();
  await page.getByRole('textbox', { name: '- Looking for a part time UI' }).click();
  await page.getByRole('textbox', { name: '- Looking for a part time UI' }).fill('Give a job description for ml engineer');
  await page.getByRole('button', { name: 'Generate with AI' }).click();
  await expect(page.locator('h3')).toContainText('Infusing AI magic into your job description...');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading')).toContainText('Create a new job');
  await expect(page.locator('body')).toContainText('Save & Continue');
  await page.getByRole('button', { name: '← Back' }).click();
  await page.getByRole('button', { name: 'Leave Page' }).click();
  await page.getByRole('img').nth(1).click();
});