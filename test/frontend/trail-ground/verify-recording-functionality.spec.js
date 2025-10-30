import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Talk Vision').click();
  await page.getByTitle('Randomly select an industry').click();
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.getByRole('button', { name: 'Get Started' }).click();
});