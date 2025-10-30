import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Leaderboard').click();
  await page.getByRole('textbox', { name: 'Search by name, email, cue' }).click();
  await page.getByRole('textbox', { name: 'Search by name, email, cue' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Search by name, email, cue' }).fill('Mad');
  await expect(page.getByText('Madan Gopal')).toBeVisible();
  await page.getByRole('textbox', { name: 'Search by name, email, cue' }).click();
  await page.getByRole('textbox', { name: 'Search by name, email, cue' }).fill('ni');
  await expect(page.getByText('Nilani M')).toBeVisible();
});