import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Upcoming meetings').click();
  await page.getByTestId('input').fill('mad');
  await expect(page.getByRole('cell', { name: 'Hala Haseeb' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Madhurima Sathyanathan' })).toBeVisible();
});