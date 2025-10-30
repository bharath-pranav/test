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
  await page.getByRole('img').nth(2).click();
  await page.getByRole('img').nth(2).click();
  await page.getByText('Leaderboard').click();
  await page.getByText('🏆 LeaderboardDays:Refresh').click();
  await page.getByRole('textbox', { name: 'Search by name, email, cue' }).click();
  await page.getByRole('textbox', { name: 'Search by name, email, cue' }).fill('nilani');
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - table:
      - rowgroup:
        - row "Rank Name Sessions Top Score Avg Score Cue Cards Explored Duration Badges":
          - cell "Rank"
          - cell "Name"
          - cell "Sessions"
          - cell "Top Score"
          - cell "Avg Score"
          - cell "Cue Cards Explored"
          - cell "Duration"
          - cell "Badges"
      - rowgroup:
        - row /🥇 Nilani M 1 \\d+ \\d+ 1 [\\d,.]+[bkmBKM]+ -/:
          - cell "🥇":
            - paragraph: 🥇
          - cell "Nilani M":
            - paragraph: Nilani M
          - cell "1":
            - paragraph: "1"
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell "1":
            - paragraph: "1"
          - cell /[\\d,.]+[bkmBKM]+/:
            - paragraph: /[\\d,.]+[bkmBKM]+/
          - cell "-":
            - paragraph: "-"
    `);
});