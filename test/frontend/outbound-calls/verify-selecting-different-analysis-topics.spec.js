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
  await page.getByText('Outbound Calls').click();
  await page.getByRole('cell', { name: 'Harish Anbazhagan' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Choose Topics');
  await page.getByRole('button', { name: 'Opening' }).nth(1).click();
  await page.getByRole('button', { name: 'Opening' }).nth(1).click();
  await page.getByLabel('Opening').getByText('Probing').click();
  await expect(page.getByTestId('drawer')).toContainText('Probing');
  await page.getByRole('button', { name: 'Probing' }).nth(1).click();
  await page.getByLabel('Probing').getByText('Pitch & Value Proposition').click();
  await expect(page.getByTestId('drawer')).toContainText('Pitch & Value Proposition');
  await expect(page.getByTestId('drawer')).toContainText('Did the SDR pitch a specific aspect of the product to showcase what problems it can solve?');
});