import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('sankar@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('karthi');
  await page.getByRole('button', { name: 'Login' }).click();
});

