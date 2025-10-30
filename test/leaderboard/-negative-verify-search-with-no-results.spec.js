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
  await page.getByText('Leaderboard').click();
  await page.getByRole('textbox', { name: 'Search by name, email, cue' }).click();
  await page.getByRole('textbox', { name: 'Search by name, email, cue' }).fill('xyz');
  await expect(page.getByRole('main')).toContainText('No team members found');
});