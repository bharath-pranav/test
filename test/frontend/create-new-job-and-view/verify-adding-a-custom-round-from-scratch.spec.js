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
  await page.getByRole('textbox', { name: 'e.g., Senior Product Manager' }).click();
  await page.getByRole('textbox', { name: 'e.g., Senior Product Manager' }).fill('AI Engineer');
  await page.getByRole('textbox', { name: 'Start writing or paste the' }).click();
  await page.getByRole('textbox', { name: 'Start writing or paste the' }).fill('Description');
  await page.getByRole('button', { name: 'Save & Continue' }).click();
  await page.locator('.w-5.h-5.rounded.border-2.flex.items-center.justify-center.flex-shrink-0.transition-all.bg-white').first().click();
  await page.getByRole('button', { name: 'Continue (2)' }).click();
  await page.locator('div').filter({ hasText: /^Resume Screening4 competencies$/ }).nth(1).click();
  await page.locator('.lucide.lucide-pen').first().click();
  await page.getByRole('textbox', { name: 'Enter round name...' }).fill('Resume Screening rename');
  await page.getByRole('button', { name: 'Add Competency' }).click();
  await page.getByRole('textbox', { name: 'Enter competency name...' }).fill('New Competency');
  await page.getByRole('textbox', { name: 'Enter competency name...' }).press('Enter');
  await page.getByRole('button', { name: 'Add Question' }).nth(4).click();
  await page.getByRole('textbox', { name: 'Enter your question...' }).fill('Sample 1');
  await page.getByRole('button', { name: 'Add Question' }).nth(4).click();
  await page.getByRole('textbox', { name: 'Enter your question...' }).fill('Sample 2');
  await page.getByRole('button', { name: 'Add Question' }).nth(4).click();
  await page.getByRole('textbox', { name: 'Enter your question...' }).fill('Sample 3');
  await page.getByRole('textbox', { name: 'Define the rubric for this' }).click();
  await page.getByRole('button', { name: 'Publish Job' }).click();
  await page.locator('.p-1.hover\\:bg-gray-100').click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: '← Back' }).click();
  await page.getByRole('button', { name: 'Delete & Leave' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('img').nth(1).click();
});