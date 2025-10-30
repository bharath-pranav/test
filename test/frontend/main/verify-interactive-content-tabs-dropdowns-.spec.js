import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByRole('link', { name: 'Industry Icon Golf Courses' }).click();
  await page.locator('div').filter({ hasText: /^Sales PitchesUncover challenges and areas for improvement to enhance$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Pitch 2$/ }).click();
  await expect(page.getByRole('main')).toContainText('Open with a relevant industry stat or trend to grab attention and set context');
  await page.getByText('Pitch 3').click();
  await expect(page.getByRole('main')).toContainText('Start with a relatable story to hook the prospect and set a consultative tone');
  await page.getByText('Pitch 4').click();
  await expect(page.getByRole('main')).toContainText('Start with a hook (statistic or story) to engage the prospect immediately');
  await page.getByText('Pitch 5').click();
  await expect(page.getByRole('main')).toContainText('Open with a scenario that resonates with their membership challenges');
  await page.getByText('Pitch 6').click();
  await expect(page.getByRole('main')).toContainText('Position the solution as a strategic innovation tool, not just a feedback platform');
  await page.locator('div:nth-child(5)').first().click();
  await page.getByRole('button', { name: 'Budget/Price Concerns' }).click();
  await page.getByRole('button', { name: 'Technical Limitations' }).click();
  await expect(page.getByRole('main')).toContainText('Our Frontline Mobile App allows staff to manage feedback and tickets directly from their smartphones, with an intuitive interface.');
  await page.getByRole('button', { name: 'Technical Limitations' }).click();
  await page.getByRole('button', { name: 'Integration Concerns' }).click();
  await expect(page.getByRole('main')).toContainText('Our system is designed to be flexible and can integrate with most golf management software through various methods, including API and data export/import options.');
  await page.getByRole('button', { name: 'Integration Concerns' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('l');
  await page.getByText('Customer testimonials and').click();
  await expect(page.getByRole('blockquote')).toContainText('"SurveySparrow automates sharing survey results and streamlines conference planning making our process efficient."');
});