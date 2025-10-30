import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByRole('link', { name: 'Industry Icon Casino Resorts' }).click();
  await page.getByText('Video Section').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('video').nth(2).press('ControlOrMeta+i');
  await page.locator('.swiper-button-prev').click();
  await page.locator('.swiper-button-next').click();
});