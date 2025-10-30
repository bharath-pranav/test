import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Upcoming meetings').click();
  await page.getByTestId('input').fill('asdftgyh');
  await expect(page.getByText('No meetings available')).toBeVisible();
  await page.getByTestId('input').click();
  await page.getByTestId('input').press('ControlOrMeta+a');
  await page.getByTestId('input').fill('');
  await expect(page.getByText('Showing 1 to 20 of 30 entries')).toBeVisible();
});