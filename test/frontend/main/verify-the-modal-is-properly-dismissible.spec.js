import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Upcoming meetings').click();
  await page.getByRole('cell', { name: 'Karthik Kumarendhiran' }).first().click();
  await expect(page.getByText('Presales Engagement Details')).toBeVisible();
  await page.getByTestId('button').nth(3).click();
  await expect(page.getByText('Presales Engagement Details')).not.toBeVisible();
  await page.getByRole('cell', { name: 'Karthik Kumarendhiran' }).first().click();
  await page.locator('body').press('Escape');
  await expect(page.getByText('Presales Engagement Details')).not.toBeVisible();
});