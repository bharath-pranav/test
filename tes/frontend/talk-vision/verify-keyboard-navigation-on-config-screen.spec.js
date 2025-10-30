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
  await page.locator('body').press('Tab');
  await page.getByRole('button', { name: 'History' }).press('Tab');
  await page.getByTestId('button').nth(1).press('Tab');
  await page.getByRole('button', { name: 'Audio' }).press('Tab');
  await page.getByRole('button', { name: 'Video' }).press('Tab');
  await page.locator('#react-select-4-input').press('Tab');
  await page.getByTitle('Randomly select a role').press('Tab');
  await page.getByRole('button').nth(5).press('Tab');
  await page.locator('#react-select-5-input').press('Enter');
  await page.locator('#react-select-5-input').fill('tra');
  await page.locator('#react-select-5-input').press('ArrowDown');
  await page.locator('#react-select-5-input').press('Enter');
  await page.locator('#react-select-5-input').press('Tab');
  await page.getByTitle('Randomly select an industry').press('Tab');
  await page.locator('#react-select-6-input').press('Tab');
  await page.getByTitle('Randomly select a persona').press('Tab');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).press('Tab');
  await page.getByRole('button', { name: 'Get Started' }).press('Enter');
  await page.getByRole('button', { name: 'Get Started' }).click();
  await expect(page.locator('#start-btn')).toContainText('Get Started');
});