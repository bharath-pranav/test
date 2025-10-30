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
  await page.locator('div').filter({ hasText: /^Competitive & Process Questions \| Cue card$/ }).nth(3).click();
  await page.locator('#react-select-4-option-0').getByRole('button').click();
  await page.locator('#react-select-4-option-0').getByRole('button').click();
});