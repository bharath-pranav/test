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
  await page.locator('div:nth-child(3) > .flex > .flex-1 > .twigs-c-jUOAJi > .twigs-select__control > .twigs-select__value-container > .twigs-select__input-container').click();
  await page.locator('#react-select-5-input').fill('casi');
  await page.locator('#react-select-5-input').press('Enter');
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.locator('body').press('Tab');
  await page.getByRole('button', { name: 'Get Started' }).click();
  await expect(page.getByRole('main')).toContainText('Recording Dual Audio');
  await page.getByTestId('button').nth(4).click();
  await page.getByText('Stop the ConvoConfigureHistoryRecording HistoryNo recordings yetStart a voice').click();
  await page.getByTestId('button').nth(4).click();
  await expect(page.getByRole('dialog')).toContainText('Select Role Play ScenarioCompetitive & Process Questions | Cue cardIndustryCasino ResortsPersonaEricCancelSave');
  await page.getByText('Stop the ConvoConfigureHistoryRecording HistoryNo recordings yetStart a voice').click();
  await page.getByRole('button', { name: 'Stop the Convo' }).click();
});