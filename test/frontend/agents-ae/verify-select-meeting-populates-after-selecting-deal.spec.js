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
  await page.getByRole('cell', { name: 'Goutham Govindaraj' }).click();
  await page.getByRole('button', { name: 'Betfair Australia - New Deal' }).nth(1).click();
  await page.getByText('Open Universities Australia').click();
  await page.getByRole('button', { name: '87400227147' }).nth(1).click();
  await page.getByRole('menuitem', { name: '87678238487' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Select DealOpen Universities Australia - New Deal');
  await expect(page.getByTestId('drawer')).toContainText('Select Meeting87678238487');
  await expect(page.getByTestId('drawer')).toContainText('A Brief summary of this call');
});