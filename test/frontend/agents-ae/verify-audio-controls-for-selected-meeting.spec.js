import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.locator('div:nth-child(3) > .twigs-c-PJLV.twigs-c-PJLV-igyEEtX-css > .flex.items-center.gap-2 > .flex > svg').click();
  await page.locator('div:nth-child(3) > .twigs-c-PJLV.twigs-c-PJLV-igyEEtX-css > .flex.items-center.gap-2 > .flex > svg').click();
  await page.getByText('Agents (AE)').click();
  await page.getByRole('cell', { name: 'Basil Philip' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Meeting Recording0:000:001x1010');
  await expect(page.locator('.twigs-c-gSguNF.twigs-c-gSguNF-eSlFYb-size-lg.twigs-c-gSguNF-eFIIEd-color-default.twigs-c-gSguNF-bUvFAs-variant-solid.twigs-c-gSguNF-lbVYmC-isIcon-true')).toBeVisible();
  await page.locator('.twigs-c-gSguNF.twigs-c-gSguNF-eSlFYb-size-lg.twigs-c-gSguNF-eFIIEd-color-default.twigs-c-gSguNF-bUvFAs-variant-solid.twigs-c-gSguNF-lbVYmC-isIcon-true').click();
  await page.locator('body').press('CapsLock');
});