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
  await page.getByText('Training Arena').click();
  await page.getByRole('button', { name: 'Start Game' }).first().click();
  await expect(page.getByRole('main')).toContainText('Get Started');
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.getByRole('button', { name: 'Get Started' }).click();
  await expect(page.locator('#start-btn')).toContainText('Stop the Convo');
  await expect(page.getByRole('main')).toContainText('Recording Dual Audio');
  await expect(page.locator('#start-btn')).toContainText('Stop the Convo');
  await page.getByRole('button', { name: 'Stop the Convo' }).click();
});