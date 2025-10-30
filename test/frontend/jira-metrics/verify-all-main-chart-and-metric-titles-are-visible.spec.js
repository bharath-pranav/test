import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761294702676.json'
});

test('test', async ({ page }) => {
  await page.goto('https://dev-perf-frontend.vercel.app/?teams=AI%2Csparrow-crm%2Csparrowdesk%2Csparrowgenie%2Css-analyze%2Css-appnest%2Css-core%2Css-deals-mobile%2Css-devops%2Css-hygiene-cloud%2Css-integrations%2Css-plgdataops%2Css-reputation%2Css-sre%2Css-website%2Cts-core%2Cts-engage%2Cts-goal%2Cts-performance');
  await page.getByRole('button', { name: 'DORA Metrics' }).click();

// Wait until a known metric heading actually appears—this is your "dashboard is ready" cue!
  await expect(page.getByRole('main')).toContainText('DORA Metrics', { timeout: 20000 });
  await expect(page.getByRole('main')).toContainText('Change Failure Rate');
  await expect(page.getByRole('main')).toContainText('Cycle Time Metrics : Story Point');
  await expect(page.getByRole('main')).toContainText('Cycle Time Metrics : Issues');
});