import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByRole('img').nth(2).click();
  await page.getByText('Zoom Meetings').click();
  await page.getByRole('textbox', { name: 'Past Days' }).click();
  await page.getByRole('textbox', { name: 'Past Days' }).fill('10');
  await page.getByRole('button', { name: 'Fetch' }).click();
  await page.getByRole('cell', { name: 'Meeting with ThriveSparrow' }).first().click();
  await page.getByTestId('drawer').getByTestId('button').click();
  await page.getByRole('cell', { name: 'Nasir Kalaji Auto Maintenance' }).click();
  await page.getByTestId('drawer').getByTestId('button').click();
  await page.getByRole('cell', { name: 'Meeting with ThriveSparrow' }).nth(4).click();
  await page.getByTestId('button').nth(5).click();
  await page.getByTestId('button').nth(5).click();
  await page.getByText('Select a time to view').click();
  await page.getByText('0:000:').click();
  await page.locator('.twigs-c-PJLV.twigs-c-PJLV-ijNRwCV-css').click();
  await page.getByRole('button').filter({ hasText: '10' }).nth(1).click();
  await page.getByText('Initial Meeting and Platform').click();
  await expect(page.getByTestId('drawer')).toContainText('Meeting Chapters');
  await page.locator('.twigs-c-PJLV.twigs-c-PJLV-ikZOAOn-css > div:nth-child(2)').click();
  await page.getByTestId('button').nth(3).click();
});