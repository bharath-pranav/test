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
  await page.getByText('Zoom Meetings').click();
  await page.getByRole('textbox', { name: 'Past Days' }).click();
  await page.getByRole('textbox', { name: 'Past Days' }).fill('10');
  await page.getByTestId('flex').nth(2).click();
  await page.getByRole('button', { name: 'Fetch' }).click();
  await page.getByRole('textbox', { name: 'Search by title, owner, or' }).click();
  await page.getByRole('textbox', { name: 'Search by title, owner, or' }).fill('srinivash');
  await expect(page.locator('tbody')).toContainText('Srinivash K Nambi');
});