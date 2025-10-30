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
  await page.getByText('SDR').click();
  await page.getByRole('cell', { name: 'Vignesh Narasimhan' }).click();
  await expect(page.getByRole('button').filter({ hasText: /^$/ }).nth(4)).toBeVisible();
  await expect(page.getByTestId('drawer')).toMatchAriaSnapshot(`
    - paragraph: /0:\\d+/
    - paragraph: /0:\\d+/
    - text: 1x
    - button:
      - img: /\\d+/
    - button:
      - img
    - button:
      - img: /\\d+/
    - button:
      - img
    `);
});