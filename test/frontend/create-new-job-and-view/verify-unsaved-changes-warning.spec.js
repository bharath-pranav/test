import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/shrijithj/Library/Application Support/aitest-case-generator/storage/storageState-project-1760440162877.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sparrow-ats.vercel.app/');
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.getByRole('img').nth(1).click();
  await page.getByTitle('Create new job').click();
  await page.getByRole('button', { name: 'Start from Scratch Fill out' }).click();
  await page.getByRole('button', { name: '← Back' }).click();
  await page.getByRole('img').nth(1).click();
  await page.getByTitle('Create new job').click();
  await page.getByRole('button', { name: 'Start from Scratch Fill out' }).click();
  await page.getByRole('textbox', { name: 'e.g., Senior Product Manager' }).click();
  await page.getByRole('textbox', { name: 'e.g., Senior Product Manager' }).fill('Sample ');
  await page.getByRole('textbox', { name: 'Start writing or paste the' }).click();
  await page.getByRole('textbox', { name: 'Start writing or paste the' }).fill('Sample');
  await page.getByRole('button', { name: '← Back' }).click();
  await page.getByRole('img').nth(1).click();
});