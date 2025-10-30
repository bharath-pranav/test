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
  await page.getByRole('textbox', { name: 'Past Days' }).fill('5');
  await page.getByRole('button', { name: 'Fetch' }).click();
  await page.getByRole('cell', { name: 'Meeting with SurveySparrow' }).nth(3).click();
  await expect(page.getByTestId('drawer')).toContainText('Choose Topics');
  await expect(page.getByTestId('drawer')).toContainText('Discovery & Qualification');
  await page.getByRole('button', { name: 'Discovery & Qualification' }).nth(1).click();
  await page.getByLabel('Discovery & Qualification').getByText('Call Preparation & Structure').click();
  await expect(page.getByTestId('drawer')).toContainText('Call Preparation & Structure');
  await page.getByRole('button', { name: 'Call Preparation & Structure' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Intent & Sentiment Analysis' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Intent & Sentiment Analysis');
  await expect(page.getByTestId('drawer')).toContainText('Was there at least one clear moment when the prospect showed significant positive recognition of value?The prospect showed positive recognition of value when discussing the conversational UI, stating \'The conversational UI you were speaking about. Yeah, that is how the UI will be.\'');
});