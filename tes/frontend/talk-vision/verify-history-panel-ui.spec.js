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
  await page.getByText('Talk Vision').click();
  await page.getByRole('button', { name: 'History' }).click();
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - paragraph: SDR Training
    - paragraph: /\\d+\\/\\d+\\/\\d+, \\d+:\\d+:\\d+/
    - paragraph: Golf Courses • Eric
    - button:
      - img
    - button:
      - img
    - paragraph: SDR Training
    - paragraph: /\\d+\\/\\d+\\/\\d+, \\d+:\\d+:\\d+/
    - paragraph: Media & Entertainment • Eric
    - button:
      - img
    - button:
      - img
    - paragraph: SDR Training
    - paragraph: /\\d+\\/\\d+\\/\\d+, \\d+:\\d+:\\d+/
    - paragraph: Casino Resorts • Eric
    - button:
      - img
    - button:
      - img
    - paragraph: my custom test
    - paragraph: /\\d+\\/\\d+\\/\\d+, \\d+:\\d+:\\d+/
    - paragraph: Golf Courses • Eric
    - button:
      - img
    - button:
      - img
    - paragraph: my recording 1
    - paragraph: /\\d+\\/\\d+\\/\\d+, \\d+:\\d+:\\d+/
    - paragraph: Casino Resorts • Eric
    - button:
      - img
    - button:
      - img
    - paragraph: test
    - paragraph: /\\d+\\/\\d+\\/\\d+, \\d+:\\d+:\\d+/
    - paragraph: Golf Courses.json • Eric
    - button:
      - img
    - button:
      - img
    - paragraph: test
    - paragraph: /\\d+\\/\\d+\\/\\d+, \\d+:\\d+:\\d+/
    - paragraph: Financial Services.json • Eric
    - button:
      - img
    - button:
      - img
    `);
});