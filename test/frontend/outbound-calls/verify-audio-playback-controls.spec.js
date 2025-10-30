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
  await page.locator('div').filter({ hasText: /^Outbound Calls$/ }).nth(1).click();
  await page.getByText('Outbound Calls').click();
  await page.getByRole('cell', { name: 'Harish Anbazhagan' }).click();
  await expect(page.getByTestId('button').nth(5)).toBeVisible();
  await expect(page.getByText('Call Recording0:002:381x1010')).toBeVisible();
});