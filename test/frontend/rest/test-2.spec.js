import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/bharathpranav/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await expect(page.getByRole('link', { name: 'Industry Icon Golf Courses' })).toBeVisible();
  await expect(page.getByText('Sales AITrial GroundKnowledge')).toBeVisible();
  await expect(page.getByText('Zoom Meetings')).toBeVisible();
  await page.getByText('Zoom Meetings').click();
});