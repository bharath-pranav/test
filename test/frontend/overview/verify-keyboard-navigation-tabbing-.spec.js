import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761294702676.json'
});

test('test', async ({ page }) => {
  await page.goto('https://dev-perf-frontend.vercel.app/?teams=AI%2Csparrow-crm%2Csparrowdesk%2Csparrowgenie%2Css-analyze%2Css-appnest%2Css-core%2Css-deals-mobile%2Css-devops%2Css-hygiene-cloud%2Css-integrations%2Css-plgdataops%2Css-reputation%2Css-sre%2Css-website%2Cts-core%2Cts-engage%2Cts-goal%2Cts-performance');
  await page.getByRole('button', { name: 'Dashboard' }).first().press('Tab');
  await page.getByRole('button', { name: 'Issues' }).press('Tab');
  await page.getByRole('button', { name: 'DORA Metrics' }).press('Tab');
  await page.getByRole('button', { name: 'Story Points' }).press('Tab');
  await page.getByRole('button', { name: 'Admin Settings' }).press('Tab');
  await page.getByRole('button', { name: 'Toggle theme' }).press('Tab');
  await page.getByRole('button', { name: 'Toggle terminal' }).press('Tab');
  await page.getByRole('button', { name: 'User menu' }).press('Tab');
  await page.getByText('19 Teams Selected', { exact: true }).click();
  await page.locator('body').press('Tab');
  await page.getByRole('button', { name: 'Last 7 days' }).press('Tab');
  await page.getByRole('button', { name: 'Team Filter' }).press('Tab');
  await page.getByRole('button', { name: 'Repository Filter' }).press('Tab');
  await expect(page.getByRole('main')).toContainText('Activity Overview');
  await page.getByText('Dashboard19 Teams SelectedTime Range:Last 7 daysTeam Filter19Repository').click();
  await page.locator('body').press('Tab');
  await page.locator('g').first().press('Tab');
  await page.locator('g').nth(5).press('Tab');
  await page.getByRole('button', { name: 'Team Name' }).press('Tab');
});