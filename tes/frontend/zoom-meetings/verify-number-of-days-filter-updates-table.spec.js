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
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - img
    - textbox "Search by title, owner, or presales"
    - paragraph: "Enter Number of Days:"
    - textbox "Past Days"
    - button "Fetch" [disabled]
    `);
  await page.getByRole('textbox', { name: 'Past Days' }).click();
  await page.getByRole('textbox', { name: 'Past Days' }).fill('5');
  await page.getByRole('button', { name: 'Fetch' }).click();
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - img
    - textbox "Search by title, owner, or presales"
    - paragraph: "Enter Number of Days:"
    - textbox "Past Days"
    - button "Fetch" [disabled]
    `);
});