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
  await page.getByText('Deals', { exact: true }).click();
  await page.getByRole('cell', { name: 'ID.me - New Deal' }).click();
  await expect(page.getByTestId('drawer')).toContainText('81569417248');
  await expect(page.getByTestId('drawer')).toContainText('Did the rep reference the specific business outcomes identified in previous conversations?The rep did not explicitly reference specific business outcomes from previous conversations. Instead, they focused on demonstrating the platform\'s capabilities based on the prospect\'s stated needs during this call.');
  await page.getByRole('button', { name: '81569417248' }).nth(1).click();
  await page.getByRole('menuitem', { name: '85879252531' }).click();
  await expect(page.getByTestId('drawer')).toContainText('85879252531');
  await expect(page.getByTestId('drawer')).toContainText('Did the rep reference the specific business outcomes identified in previous conversations?The transcript does not provide evidence that the rep referenced specific business outcomes from previous conversations. The focus was on demonstrating the product\'s capabilities.');
});