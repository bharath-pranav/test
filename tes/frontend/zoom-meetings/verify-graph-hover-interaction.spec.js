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
  await page.getByRole('cell', { name: 'Sherin James\'s Zoom Meeting *' }).click();
  await page.locator('.twigs-c-PJLV.twigs-c-eOnGSt').click();
  await page.getByRole('cell', { name: 'Meeting with Goutham' }).click();
  await page.getByRole('button', { name: 'Individual Report' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Goutham Govindaraj');
  await page.getByText('Deb Heaphy').first().click();
  await expect(page.getByTestId('drawer')).toContainText('Deb Heaphy');
  await expect(page.getByRole('application')).toMatchAriaSnapshot(`
    - application:
      - text: /[\\d,.]+[bkmBKM]+ [\\d,.]+[bkmBKM]+ [\\d,.]+[bkmBKM]+ [\\d,.]+[bkmBKM]+ [\\d,.]+[bkmBKM]+ [\\d,.]+[bkmBKM]+ [\\d,.]+[bkmBKM]+ [\\d,.]+[bkmBKM]+ [\\d,.]+[bkmBKM]+ [\\d,.]+[bkmBKM]+ [\\d,.]+[bkmBKM]+ [\\d,.]+[bkmBKM]+ 0 \\d+ \\d+ \\d+ \\d+\\.\\d+ Words per Minute ▼/
      - img
      - text: ▼
      - img
      - text: ▼
      - img
      - text: ▼
      - img
      - text: ▼
      - img
    `);
  await page.getByTestId('button').nth(3).click();
});