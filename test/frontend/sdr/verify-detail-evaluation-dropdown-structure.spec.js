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
  await page.getByText('SDR').click();
  await page.getByRole('cell', { name: 'Deshik Shinde' }).click();
  await page.getByRole('button', { name: 'Melody' }).click();
  await page.getByText('Stuart').click();
  await expect(page.getByTestId('drawer')).toContainText('Stuart');
  await page.getByRole('button', { name: 'Stuart' }).click();
  await page.getByText('Alicia').click();
  await expect(page.getByTestId('drawer')).toContainText('Alicia');
  await page.getByRole('button', { name: 'Opening' }).click();
  await page.getByLabel('Opening').getByText('Objection Handling').click();
  await expect(page.getByTestId('drawer')).toContainText('Did the SDR ask relevant probing questions when facing objections?');
});