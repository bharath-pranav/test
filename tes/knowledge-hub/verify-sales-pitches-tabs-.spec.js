import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByRole('link', { name: 'Industry Icon Golf Courses' }).click();
  await page.getByText('Sales Pitches').click();
  await expect(page.getByRole('main')).toContainText('Pitch 1');
  await expect(page.getByText('1Reference recent club news')).toBeVisible();
  await page.getByText('Pitch 2').click();
  await expect(page.getByRole('main')).toContainText('Pitch 2');
  await expect(page.getByRole('main')).toContainText('1Open with a relevant industry stat or trend to grab attention and set context');
  await page.getByText('Pitch 1Pitch 2Pitch 3Pitch').click();
  await page.getByText('Pitch 4').click();
  await expect(page.getByRole('main')).toContainText('Pitch 4');
  await expect(page.getByText('1Start with a hook (statistic')).toBeVisible();
});