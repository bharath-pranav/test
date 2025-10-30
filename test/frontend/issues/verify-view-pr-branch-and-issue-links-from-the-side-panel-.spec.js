import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761294702676.json'
});

test('test', async ({ page }) => {
  await page.goto('https://dev-perf-frontend.vercel.app/?teams=AI%2Csparrow-crm%2Csparrowdesk%2Csparrowgenie%2Css-analyze%2Css-appnest%2Css-core%2Css-deals-mobile%2Css-devops%2Css-hygiene-cloud%2Css-integrations%2Css-plgdataops%2Css-reputation%2Css-sre%2Css-website%2Cts-core%2Cts-engage%2Cts-goal%2Cts-performance');
  await page.getByRole('button', { name: 'Issues' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link').first().click();
  const page3 = await page3Promise;
  const page4Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(2) > a').click();
  const page4 = await page4Promise;
});