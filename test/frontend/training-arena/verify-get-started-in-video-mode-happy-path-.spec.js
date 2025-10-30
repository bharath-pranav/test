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
  await page.getByRole('button', { name: 'Video' }).click();
  await expect(page.getByRole('main')).toContainText('Video Analysis Prompt');
  await page.locator('div:nth-child(5) > .flex > .flex-1 > .twigs-c-jUOAJi > .twigs-select__control > .twigs-select__value-container > .twigs-select__input-container').click();
  await page.getByText('Default Video Prompt', { exact: true }).click();
  await page.getByRole('button', { name: 'Get Started' }).click();
  await expect(page.locator('#start-btn')).toContainText('Get Started');
  await page.getByRole('button', { name: 'Get Started' }).click();
  await expect(page.locator('#start-btn')).toContainText('Stop the Convo');
});