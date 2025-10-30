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
  await page.getByText('Leaderboard').click();
  await page.getByRole('textbox', { name: 'Days' }).click();
  await page.getByRole('textbox', { name: 'Days' }).fill('07');
  await page.getByTestId('button').click();
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - paragraph: 🏆 Leaderboard
    - img
    - textbox "Search by name, email, cue types, or badges"
    - paragraph: "Days:"
    - textbox "Days"
    - button "Refresh":
      - paragraph: Refresh
    `);
});