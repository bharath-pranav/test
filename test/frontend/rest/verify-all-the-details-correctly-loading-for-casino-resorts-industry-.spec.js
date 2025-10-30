const { chromium } = require('playwright');
import { test, expect } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/auth-storage-1760082690451.json'
  });
  const page = await context.newPage();
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.locator('.cursor-pointer.rounded-\\[20px\\]').first().click();
  await expect(page.getByTestId('text').nth(1)).toBeVisible();
  await expect(page.getByText('Casino Resorts').nth(2)).toBeVisible();
  await expect(page.getByText('Difficulty in gathering and')).toBeVisible();
  await expect(page.getByText('Loyalty Program Optimization:')).toBeVisible();
  await expect(page.getByText('Employee Turnover and')).toBeVisible();
  await expect(page.getByText('Operational Efficiency:')).toBeVisible();
  await expect(page.getByText('Regulatory Compliance:')).toBeVisible();
  await page.getByText('Feature Mapping').click();
  await expect(page.getByTestId('text').nth(3)).toBeVisible();
  await expect(page.getByText('Sales Pitches')).toBeVisible();
  await expect(page.getByText('Selling Points')).toBeVisible();
  await expect(page.getByText('Objection Handling Playbook')).toBeVisible();
  await expect(page.getByText('Video Section')).toBeVisible();
  await expect(page.getByText('Customer Stories')).toBeVisible();
  await expect(page.getByText('Testimonials', { exact: true })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Sales PitchesUncover challenges and areas for improvement to enhance$/ }).first().click();
  await expect(page.getByText('Pitch 2')).toBeVisible();
  await expect(page.getByText('Pitch 3')).toBeVisible();
  await page.getByText('Pitch 4').click();
  await expect(page.getByText('Pitch 5')).toBeVisible();
  await expect(page.getByText('Pitch 6')).toBeVisible();
  await page.getByText('Customer testimonials and').click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();