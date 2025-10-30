import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Upcoming meetings').click();
  await page.getByText('Presales Owner').click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByText('Presales Owner↑').click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByText('Contact Owner').click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByText('Contact Owner↑').click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByText('Contact Owner↓').click();
  await page.getByText('Team Name').click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByText('Team Name↑').click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByText('Team Name↓').click();
  await page.getByText('Demo Date').click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByText('Demo Date↑').click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByText('Demo Date↓').click();
  await page.getByText('Contact Name').click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByText('Contact Name↑').click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByText('Contact Name↓').click();
  await page.getByRole('cell', { name: 'Company' }).click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByText('Company↑').click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByText('Company↓').click();
  await page.getByText('Job Title').click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByText('Job Title↑').click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByText('Job Title↓').click();
  await page.getByText('Deal Name').click();
  await expect(page.getByText('↑')).toBeVisible();
  await page.getByText('Deal Name↑').click();
  await expect(page.getByText('↓')).toBeVisible();
  await page.getByText('Deal Name↓').click();
});