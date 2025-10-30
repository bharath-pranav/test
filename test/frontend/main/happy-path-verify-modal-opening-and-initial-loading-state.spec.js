import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Upcoming meetings').click();
  await page.getByRole('cell', { name: 'Sushmitha N B' }).first().click();
  await expect(page.locator('.w-12')).toBeVisible();
  await page.getByRole('tab', { name: 'Tasks' }).click();
  await page.getByRole('tab', { name: 'Notes' }).click();
  await page.getByRole('tab', { name: 'Emails' }).click();
  await page.getByRole('tab', { name: 'Meetings' }).click();
  await page.getByRole('tab', { name: 'Calls' }).click();
  await page.getByRole('tab', { name: 'Web Page Visits' }).click();
  await page.getByTestId('button').nth(3).click();
});