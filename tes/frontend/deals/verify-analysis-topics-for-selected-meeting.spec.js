import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByText('Deals', { exact: true }).click();
  await page.getByRole('cell', { name: 'Tikun Olam - New Deal' }).click();
  await page.getByRole('button', { name: 'Discovery & Qualification' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Intent & Sentiment Analysis' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Choose TopicsIntent & Sentiment Analysis');
  await expect(page.getByTestId('drawer')).toContainText('Was the call free from significant interruptions, technical issues, or misunderstandings?The transcript is only 2.1 seconds long and shows no signs of interruptions, technical issues, or misunderstandings.');
});