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
  await page.getByRole('cell', { name: 'Sri Durga' }).click();
  await page.getByRole('button', { name: 'Create PDP Plan' }).click();
  await expect(page.getByRole('dialog')).toMatchAriaSnapshot(`- paragraph: Performance Analysis:Sri Durga`);
  await expect(page.getByRole('button').first()).toBeVisible();
  await page.getByRole('button').nth(1).click();
  await page.getByTestId('button').nth(4).click();
});