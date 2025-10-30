import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Leaderboard').click();
  await page.getByText('Name').click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByRole('cell', { name: 'Name ↑' }).click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByRole('cell', { name: 'Name ↓' }).click();
  await page.getByRole('cell', { name: 'Sessions' }).click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByRole('cell', { name: 'Sessions ↑' }).click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByRole('cell', { name: 'Sessions ↓' }).click();
  await page.getByRole('cell', { name: 'Top Score' }).click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByRole('cell', { name: 'Top Score ↑' }).click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByRole('cell', { name: 'Top Score ↓' }).click();
  await page.getByRole('cell', { name: 'Avg Score' }).click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByRole('cell', { name: 'Avg Score ↑' }).click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByRole('cell', { name: 'Avg Score ↓' }).click();
  await page.getByRole('cell', { name: 'Cue Cards Explored' }).click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByText('Cue Cards Explored↑').click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByRole('cell', { name: 'Cue Cards Explored ↓' }).click();
  await page.getByText('Duration').click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByText('Duration↑').click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByRole('cell', { name: 'Duration ↓' }).click();
  await page.getByText('Badges').click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByText('Badges↑').click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByText('Badges↓').click();
});