import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761294702676.json'
});

test('test', async ({ page }) => {
  await page.goto('https://dev-perf-frontend.vercel.app/?teams=AI%2Csparrow-crm%2Csparrowdesk%2Csparrowgenie%2Css-analyze%2Css-appnest%2Css-core%2Css-deals-mobile%2Css-devops%2Css-hygiene-cloud%2Css-integrations%2Css-plgdataops%2Css-reputation%2Css-sre%2Css-website%2Cts-core%2Cts-engage%2Cts-goal%2Cts-performance');
  await page.getByRole('button', { name: 'Story Points' }).click();
  await page.locator('div').filter({ hasText: /^Aakash S$/ }).nth(1).click();
  await expect(page.getByRole('heading')).toContainText('Aakash S');
  await expect(page.getByRole('main')).toContainText('Issue Type Distribution');
  await expect(page.getByRole('main')).toContainText('Bug Analysis by Severity');
  await expect(page.getByRole('main')).toContainText('Issues Completion Rate');
  await expect(page.getByRole('main')).toContainText('Story Points');
  await expect(page.getByRole('main')).toContainText('Bugs Quality Score');
});