import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByRole('link', { name: 'Industry Icon Casino Resorts' }).click();
  await expect(page.getByText('Casino Resorts').nth(2)).toBeVisible();
  await page.getByTestId('flex').nth(4).click();
  await expect(page.getByText('Feature Mapping').nth(2)).toBeVisible();
  await page.getByText('Sales Pitches').click();
  await expect(page.getByText('Sales Pitches').nth(2)).toBeVisible();
  await page.getByText('Pitch 2').click();
  await expect(page.getByText('Show empathy for the unique')).toBeVisible();
  await page.getByText('Pitch 3').click();
  await expect(page.getByText('Personalize your approach')).toBeVisible();
  await page.getByText('Pitch 4').click();
  await expect(page.getByText('Personalize your opener with')).toBeVisible();
  await page.locator('div').filter({ hasText: /^Pitch 5$/ }).click();
  await expect(page.getByText('Personalize your opener with')).toBeVisible();
  await page.getByText('Pitch 6').click();
  await expect(page.getByText('Demonstrate deep')).toBeVisible();
  await page.locator('div').filter({ hasText: /^Selling PointsUncover challenges and areas for improvement to enhance$/ }).first().click();
  await expect(page.getByText('Selling Points').nth(2)).toBeVisible();
  await page.locator('div:nth-child(5)').first().click();
  await expect(page.getByText('Objection Handling Playbook').nth(2)).toBeVisible();
  await page.locator('div').filter({ hasText: /^Video SectionUncover challenges and areas for improvement to enhance$/ }).first().click();
  await expect(page.getByText('Video Section').nth(2)).toBeVisible();
  await page.locator('div:nth-child(7)').click();
  await expect(page.getByText('Customer Stories').nth(2)).toBeVisible();
  await page.locator('div:nth-child(8)').click();
  await expect(page.getByText('Testimonials').nth(3)).toBeVisible();
});