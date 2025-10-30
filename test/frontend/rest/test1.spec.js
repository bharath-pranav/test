import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Downloads/Asura.ai/app/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await expect(page.getByText('Upcoming meetings')).toBeVisible();
  await page.getByText('Upcoming meetings').click();
  await expect(page.getByRole('row', { name: 'Presales Owner Contact Owner' })).toBeVisible();

  await page.getByRole('cell', { name: 'Adam Foster' }).click();
  await page.getByText('No Job Title • abbavoyage.com').click();



// === Recorded continuation steps ===
  await page.getByRole('tab', { name: 'Web Page Visits' }).click();
  await page.getByTestId('button').nth(3).click();
});