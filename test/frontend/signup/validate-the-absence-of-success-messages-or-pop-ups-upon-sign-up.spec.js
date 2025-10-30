import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/login');
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await expect(page.locator('div').filter({ hasText: /^Sign Up$/ })).toBeVisible();
  await expect(page.getByText('Sign UpAlready have an')).toBeVisible();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('karthi12345@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('karthi');
  await page.getByRole('button', { name: 'Sign Up' }).click();
});