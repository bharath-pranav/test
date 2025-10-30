import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByRole('img').nth(2).click();
  await page.getByRole('img').nth(2).click();
  await page.getByText('Zoom Meetings').click();
  await page.getByRole('cell', { name: 'Tessa Kelly and Samarth Koul' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Meeting Details');
  await expect(page.getByTestId('drawer')).toContainText('Section Scores');
  await expect(page.getByTestId('drawer')).toContainText('Contact Information (1)');
  await expect(page.getByTestId('drawer')).toContainText('Deal Information (1)');
  await expect(page.getByTestId('drawer')).toContainText('Detail Evaluation');
  await expect(page.getByTestId('drawer')).toContainText('Meeting Analysis');
  await expect(page.getByTestId('drawer')).toContainText('Summary');
  await expect(page.getByTestId('drawer')).toContainText('A Brief summary of this call');
});