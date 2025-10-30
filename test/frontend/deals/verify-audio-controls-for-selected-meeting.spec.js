import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByText('Deals', { exact: true }).click();
  await page.getByRole('cell', { name: 'Infinity Home Services -' }).click();
  await page.locator('.twigs-c-gSguNF.twigs-c-gSguNF-eSlFYb-size-lg.twigs-c-gSguNF-eFIIEd-color-default.twigs-c-gSguNF-bUvFAs-variant-solid.twigs-c-gSguNF-lbVYmC-isIcon-true').click();
  await expect(page.locator('.twigs-c-gSguNF.twigs-c-gSguNF-eSlFYb-size-lg.twigs-c-gSguNF-eFIIEd-color-default.twigs-c-gSguNF-bUvFAs-variant-solid.twigs-c-gSguNF-lbVYmC-isIcon-true')).toBeVisible();
  await page.locator('.twigs-c-gSguNF.twigs-c-gSguNF-eSlFYb-size-lg.twigs-c-gSguNF-eFIIEd-color-default.twigs-c-gSguNF-bUvFAs-variant-solid.twigs-c-gSguNF-lbVYmC-isIcon-true').click();
});