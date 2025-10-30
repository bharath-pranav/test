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
  await page.getByText('Deals', { exact: true }).click();
  await page.getByRole('cell', { name: 'ID.me - New Deal' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTestId('button').nth(3).click();
  const page1 = await page1Promise;
  await page1.locator('div').filter({ hasText: /^×close$/ }).click();
  await expect(page1.getByRole('button', { name: 'Hubspot Homepage' })).toBeVisible();
});