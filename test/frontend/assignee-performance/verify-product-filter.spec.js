import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761294702676.json'
});

test('test', async ({ page }) => {
  await page.goto('https://dev-perf-frontend.vercel.app/?teams=AI%2Csparrow-crm%2Csparrowdesk%2Csparrowgenie%2Css-analyze%2Css-appnest%2Css-core%2Css-deals-mobile%2Css-devops%2Css-hygiene-cloud%2Css-integrations%2Css-plgdataops%2Css-reputation%2Css-sre%2Css-website%2Cts-core%2Cts-engage%2Cts-goal%2Cts-performance');
  await page.getByRole('button', { name: 'Story Points' }).click();
  await page.waitForTimeout(25000);
  await expect(page.getByRole('button', { name: 'SSE' })).toBeVisible();
  await page.getByRole('button', { name: 'SSE' }).click();
  await page.getByText('TEG').click();
  await page.getByRole('radiogroup').getByText('TEG').click();
  await page.getByText('Last 90 daysTEGAssignees').click();
  await page.waitForTimeout(25000);
  await expect(page.getByRole('main')).toContainText('TEG');
  await expect(page.getByRole('main')).toContainText('Assignees Performance');
  await expect(page.getByRole('main')).toContainText('Assignees Performance');
  await expect(page.getByRole('main')).toContainText('AssigneeStory PointsIssue Completion RateAverage Coding TimeRework RatioTotal BugsQuality ScoreTotal Subtasks');
});