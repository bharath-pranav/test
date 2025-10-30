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
  await page.getByText('Deals', { exact: true }).click();
  await page.getByRole('cell', { name: 'Infinity Home Services -' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Aggregated Section Scores');
  await expect(page.getByTestId('drawer')).toContainText('Detail Evaluation');
  await page.getByText('Meeting Recording').click();
  await expect(page.getByTestId('drawer')).toContainText('Meeting Recording');
});