import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/madan.gopal/Library/Application Support/aitest-case-generator/storage/storageState-project-1759851588968.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Training Arena').click();
  await page.getByRole('button', { name: 'Start Game' }).nth(1).click();
  await expect(page.getByRole('heading', { name: 'AI Voice Assistant' })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Implementation & Onboarding | Cue card');
  await expect(page.getByRole('main')).toContainText('Ecommerce, Cosmetics, Luxury goods & Jewellery.json');
  
});