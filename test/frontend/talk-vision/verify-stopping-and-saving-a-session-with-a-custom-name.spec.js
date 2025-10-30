import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByRole('img').nth(2).click();
  await page.getByRole('img').nth(2).click();
  await page.getByText('Talk Vision').click();
  await page.locator('div').filter({ hasText: /^Select Industry$/ }).nth(3).click();
  await page.getByText('Apparel & Fashion or Ecommerce').click();
  await page.locator('#react-select-5-input').fill('appa');
  await page.locator('#react-select-5-input').press('Enter');
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Stop the Convo' }).click();
  await expect(page.getByRole('main')).toContainText('Save RecordingWould you like to save this recording session? You can give it a custom name or use the default.Recording Name (Optional)Leave empty to use "SDR Training" as the default name');
  await page.getByRole('textbox', { name: 'SDR Training' }).click();
  await page.getByRole('textbox', { name: 'SDR Training' }).fill('testing 1');
  await page.getByRole('button', { name: 'Save Recording' }).click();
});