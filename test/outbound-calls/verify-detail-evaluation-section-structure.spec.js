import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByText('Outbound Calls').click();
  await page.getByRole('cell', { name: 'Jeryl Cruz' }).nth(1).click();
  await page.getByTestId('drawer').getByTestId('button').click();
  await page.getByRole('cell', { name: 'Harish Anbazhagan' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Overall Score');
  await expect(page.getByTestId('drawer')).toContainText('Section Scores');
  await expect(page.getByTestId('drawer')).toContainText('Detail Evaluation');
  await expect(page.getByTestId('drawer')).toContainText('A Brief summary of this call');
});