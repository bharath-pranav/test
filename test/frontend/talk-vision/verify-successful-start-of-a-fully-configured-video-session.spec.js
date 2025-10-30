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
  await page.getByRole('button', { name: 'Video' }).click();
  await page.locator('div:nth-child(3) > .flex > .flex-1 > .twigs-c-jUOAJi > .twigs-select__control > .twigs-select__value-container > .twigs-select__input-container').click();
  await page.locator('#react-select-5-input').fill('golf ');
  await page.locator('#react-select-5-input').press('Enter');
  await page.locator('div:nth-child(5) > .flex > .flex-1 > .twigs-c-jUOAJi > .twigs-select__control > .twigs-select__value-container > .twigs-select__input-container').click();
  await page.getByText('Default Video Prompt', { exact: true }).click();
  await page.getByRole('button', { name: 'Get Started' }).click();
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - img
    - text: You
    - button "Get Started":
      - img
      - paragraph: Get Started
    - button "Configure":
      - img
    - button "History":
      - img
    - paragraph: Recording History
    - button:
      - img
    - img
    - paragraph: No recordings yet
    - paragraph: Start a voice session to begin recording conversations
    `);
  await page.getByRole('button', { name: 'Get Started' }).click();
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - img
    - text: You
    - button "Stop the Convo":
      - img
      - paragraph: Stop the Convo
    - button "Configure":
      - img
    - button "History":
      - img
    - paragraph: Recording History
    - button:
      - img
    - img
    - paragraph: No recordings yet
    - paragraph: Start a voice session to begin recording conversations
    - text: Recording Dual Audio
    `);
  await expect(page.getByRole('main')).toContainText('Recording Dual Audio');
  await page.getByRole('button', { name: 'Stop the Convo' }).click();
});