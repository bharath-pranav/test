import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('sankar@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('karthi');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('http://localhost:3001/conversation');
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  await page.getByRole('button', { name: 'Logout' }).click();
});