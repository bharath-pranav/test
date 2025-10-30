import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.locator('div').filter({ hasText: /^Upcoming meetings$/ }).nth(3).click();
  await page.getByRole('cell', { name: 'Karthik Kumarendhiran' }).first().click();
  await page.getByRole('tab', { name: 'Tasks' }).click();
  await expect(page.getByText('No tasks available')).toBeVisible();
  await page.getByRole('tab', { name: 'Notes' }).click();
  await expect(page.getByText('No notes available')).toBeVisible();
  await page.getByRole('tab', { name: 'Emails' }).click();
  await page.getByRole('tab', { name: 'Meetings' }).click();
  await expect(page.getByText('No meetings available')).toBeVisible();
  await page.getByRole('tab', { name: 'Calls' }).click();
  await expect(page.getByText('No calls available')).toBeVisible();
  await page.getByRole('tab', { name: 'Web Page Visits' }).click();
  await expect(page.getByText('No web page visits available')).toBeVisible();
});