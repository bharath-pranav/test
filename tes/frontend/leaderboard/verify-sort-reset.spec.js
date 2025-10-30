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
  await page.waitForTimeout(5000);
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
        - row /🥇 Sridurga Tamil 2 \\d+ \\d+ 1 [\\d,.]+[bkmBKM]+ 🥊/:
          - cell "🥇":
            - paragraph: 🥇
          - cell "Sridurga Tamil":
            - paragraph: Sridurga Tamil
          - cell "2":
            - paragraph: "2"
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell "1":
            - paragraph: "1"
          - cell /[\\d,.]+[bkmBKM]+/:
            - paragraph: /[\\d,.]+[bkmBKM]+/
          - cell "🥊"
        - row /🥈 Gayathri Mohan 1 \\d+ \\d+ 1 [\\d,.]+[bkmBKM]+ 🔎/:
          - cell "🥈":
            - paragraph: 🥈
          - cell "Gayathri Mohan":
            - paragraph: Gayathri Mohan
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
          - cell "🔎"
        - row /🥉 Nilani M 1 \\d+ \\d+ 1 [\\d,.]+[bkmBKM]+ -/:
          - cell "🥉":
            - paragraph: 🥉
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
        - row /4 Kabeleswar Pe 3 \\d+ \\d+ 3 [\\d,.]+[bkmBKM]+ -/:
          - cell "4":
            - paragraph: "4"
          - cell "Kabeleswar Pe":
            - paragraph: Kabeleswar Pe
          - cell "3":
            - paragraph: "3"
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell "3":
            - paragraph: "3"
          - cell /[\\d,.]+[bkmBKM]+/:
            - paragraph: /[\\d,.]+[bkmBKM]+/
          - cell "-":
            - paragraph: "-"
        - row /5 Salestest \\d+ \\d+ \\d+ 3 [\\d,.]+[bkmBKM]+ -/:
          - cell "5":
            - paragraph: "5"
          - cell "Salestest":
            - paragraph: Salestest
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell "3":
            - paragraph: "3"
          - cell /[\\d,.]+[bkmBKM]+/:
            - paragraph: /[\\d,.]+[bkmBKM]+/
          - cell "-":
            - paragraph: "-"
    `);
  await page.getByText('Top Score').click();
  await page.getByText('Top Score').click();
  await page.getByText('Top Score').click();
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - table:
      - rowgroup:
        - row "Rank Name Sessions Top Score Avg Score Cue Cards Explored Duration Badges":
          - cell "Rank"
          - cell "Name"
          - cell "Sessions"
          - cell "Top Score":
            - paragraph
          - cell "Avg Score"
          - cell "Cue Cards Explored"
          - cell "Duration"
          - cell "Badges"
      - rowgroup:
        - row /🥇 Sridurga Tamil 2 \\d+ \\d+ 1 [\\d,.]+[bkmBKM]+ 🥊/:
          - cell "🥇":
            - paragraph: 🥇
          - cell "Sridurga Tamil":
            - paragraph: Sridurga Tamil
          - cell "2":
            - paragraph: "2"
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell "1":
            - paragraph: "1"
          - cell /[\\d,.]+[bkmBKM]+/:
            - paragraph: /[\\d,.]+[bkmBKM]+/
          - cell "🥊"
        - row /🥈 Gayathri Mohan 1 \\d+ \\d+ 1 [\\d,.]+[bkmBKM]+ 🔎/:
          - cell "🥈":
            - paragraph: 🥈
          - cell "Gayathri Mohan":
            - paragraph: Gayathri Mohan
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
          - cell "🔎"
        - row /🥉 Nilani M 1 \\d+ \\d+ 1 [\\d,.]+[bkmBKM]+ -/:
          - cell "🥉":
            - paragraph: 🥉
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
        - row /4 Kabeleswar Pe 3 \\d+ \\d+ 3 [\\d,.]+[bkmBKM]+ -/:
          - cell "4":
            - paragraph: "4"
          - cell "Kabeleswar Pe":
            - paragraph: Kabeleswar Pe
          - cell "3":
            - paragraph: "3"
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell "3":
            - paragraph: "3"
          - cell /[\\d,.]+[bkmBKM]+/:
            - paragraph: /[\\d,.]+[bkmBKM]+/
          - cell "-":
            - paragraph: "-"
        - row /5 Salestest \\d+ \\d+ \\d+ 3 [\\d,.]+[bkmBKM]+ -/:
          - cell "5":
            - paragraph: "5"
          - cell "Salestest":
            - paragraph: Salestest
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell /\\d+/:
            - paragraph: /\\d+/
          - cell "3":
            - paragraph: "3"
          - cell /[\\d,.]+[bkmBKM]+/:
            - paragraph: /[\\d,.]+[bkmBKM]+/
          - cell "-":
            - paragraph: "-"
    `);
});