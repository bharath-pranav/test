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
  await page.getByRole('cell', { name: 'Vignesh Narasimhan' }).click();
  await page.getByRole('button', { name: 'Gus' }).click();
  await page.getByText('Brooklin').click();
  await expect(page.getByTestId('drawer')).toContainText('BBrooklinData and Research Fellow at bmays8177Call Duration0:13Call OutcomeHung upCall TimeApril 24, 2025 at 05:30');
  await page.getByRole('button', { name: 'Brooklin' }).click();
  await page.getByText('Gus').click();
  await expect(page.getByTestId('drawer')).toContainText('GGusHuman Resources Manager at Call Duration0:26Call OutcomeConnectedCall TimeApril 24, 2025 at 05:30');
});