import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1760674584600.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByText('Talk Vision').click();
  await page.getByRole('button', { name: 'History' }).click();
  await page.getByTestId('text').nth(2).click();
  await page.getByTestId('button').nth(2).click();
  await expect(page.locator('.recording-drawer-overlay')).toBeVisible();
});