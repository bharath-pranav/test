import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.locator('div:nth-child(3) > .twigs-c-PJLV.twigs-c-PJLV-igyEEtX-css > .flex.items-center.gap-2 > .flex > svg').click();
  await page.locator('div:nth-child(3) > .twigs-c-PJLV.twigs-c-PJLV-igyEEtX-css > .flex.items-center.gap-2 > .flex > svg').click();
  await page.getByText('Agents (AE)').click();
  await page.getByRole('cell', { name: 'Sri Durga' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Agent Details');
  await expect(page.getByTestId('drawer')).toContainText('Aggregated Overall Score');
  await expect(page.getByTestId('drawer')).toContainText('Pre Call Score');
  await expect(page.getByTestId('drawer')).toContainText('Detail Evaluation');
  await expect(page.getByTestId('drawer')).toContainText('Select Deal');
  await expect(page.getByTestId('drawer')).toContainText('Choose Topics');
  await expect(page.getByTestId('drawer')).toContainText('A Brief summary of this call');
  await page.getByTestId('button').nth(4).click();
});