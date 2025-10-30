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
  await page.getByText('Talk Vision').click();
  await expect(page.getByRole('main')).toContainText('Competitive & Process Questions | Cue card');
  await page.getByTitle('Randomly select a role').click();
  await page.getByTitle('Randomly select a role').click();
  await page.getByText('Role Play Scenario').click();
  await page.getByTitle('Randomly select a role').click();
});