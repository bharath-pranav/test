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
  await page.locator('.min-w-4 > svg > path').first().click();
  await page.getByText('Knowledge hub').click();
  await page.getByRole('link', { name: 'Industry Icon Casino Resorts' }).click();
  await expect(page.getByRole('main')).toContainText('Casino Resorts');
  await expect(page.getByRole('main')).toContainText('Pain Points');
  await expect(page.locator('#root')).toContainText('Sales Pitches');
  await page.locator('div').filter({ hasText: /^Sales PitchesUncover challenges and areas for improvement to enhance$/ }).first().click();
  await expect(page.getByRole('main')).toContainText('Sales Pitches');
  await expect(page.getByRole('main')).toContainText('Pitch 1');
  await expect(page.locator('#root')).toContainText('Customer StoriesReal customer success stories and case studies showcasing transformational results');
  await expect(page.locator('#root')).toContainText('TestimonialsCustomer testimonials and feedback highlighting product benefits and satisfaction');
});