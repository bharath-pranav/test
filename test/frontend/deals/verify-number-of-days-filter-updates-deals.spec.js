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
  await page.locator('div').filter({ hasText: /^Deals$/ }).nth(1).click();
  await page.getByRole('textbox', { name: 'Post Days' }).click();
  await page.getByRole('textbox', { name: 'Post Days' }).fill('10');
  await page.getByRole('textbox', { name: 'Post Days' }).press('Enter');
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - img
    - textbox "Search by deal name, owner name, presales name"
    - paragraph: "Enter Number of Days:"
    - textbox "Post Days"
    - button "Fetch":
      - paragraph: Fetch
    `);
});