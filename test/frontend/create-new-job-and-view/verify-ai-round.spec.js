import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/shrijithj/Library/Application Support/aitest-case-generator/storage/storageState-project-1760440162877.json'
});
test.setTimeout(60000);
test('test', async ({ page }) => {
  await page.goto('https://sparrow-ats.vercel.app/');
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.getByRole('img').nth(1).click();
  await page.getByTitle('Create new job').click();
  await page.getByRole('button', { name: 'Use a Template Pick from' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  await page.getByRole('button', { name: 'Save & Continue' }).click();
  await page.getByRole('button', { name: 'Continue (1)' }).click();
  await page.getByRole('button', { name: 'Create with AI' }).click();
  await page.getByRole('textbox', { name: 'e.g., A final round focused' }).click();
  await page.getByRole('textbox', { name: 'e.g., A final round focused' }).fill('Create a round for deep learning');
  await page.getByRole('button', { name: 'Generate' }).click();
  await expect(page.locator('body')).toContainText('Our AI is crafting your hiring round...');
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: '← Back' }).click();
  await page.getByRole('button', { name: 'Delete & Leave' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('img').nth(1).click();
});