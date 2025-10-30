import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/shrijithj/Library/Application Support/aitest-case-generator/storage/storageState-project-1760440162877.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sparrow-ats.vercel.app/');
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^River England$/ }).click();
  await expect(page.locator('[id="radix-«rr»-trigger-current-round"]')).toContainText('Basic Info');
  await expect(page.locator('[id="radix-«rr»-trigger-activity"]')).toContainText('Activities');
  await expect(page.locator('label')).toContainText('Email');
  await expect(page.locator('body')).toContainText('Jobs Applied');
});