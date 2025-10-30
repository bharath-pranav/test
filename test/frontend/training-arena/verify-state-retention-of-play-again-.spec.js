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
  await page.getByRole('button', { name: 'Start Game' }).nth(1).click();
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.waitForTimeout(5000);
  await expect(page.getByRole('main')).toContainText('Recording Dual Audio');
  await page.getByRole('button', { name: 'Stop the Convo' }).click();
  await page.getByRole('textbox', { name: 'SDR Training' }).click();
  await page.getByRole('textbox', { name: 'SDR Training' }).fill('test recording 2');
  await page.getByRole('button', { name: 'Save Recording' }).click();
  await page.getByRole('img').nth(2).click();
  await page.getByRole('img').nth(2).click();
  await page.getByText('Training Arena').click();
});