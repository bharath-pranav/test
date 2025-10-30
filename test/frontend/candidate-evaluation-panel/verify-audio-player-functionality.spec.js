import { test, expect } from '@playwright/test';

test.use({
  storageState: '/Users/shrijithj/Library/Application Support/aitest-case-generator/storage/storageState-project-1760440162877.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sparrow-ats.vercel.app/');
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.getByRole('img').nth(1).click();
  await page.getByRole('textbox', { name: 'Search jobs and views...' }).click();
  await page.getByRole('textbox', { name: 'Search jobs and views...' }).fill('mock');
  await page.locator('div').filter({ hasText: /^Sales Mock$/ }).nth(3).click();
  await page.getByRole('cell', { name: 'Sharunikaa' }).click();
  await expect(page.locator('body')).toContainText('Audio & Visual Recording');
  await page.locator('.w-7').click();
  await page.locator('.w-7').click();
  await page.locator('.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible\\:outline-none.focus-visible\\:ring-2.focus-visible\\:ring-ring.focus-visible\\:ring-offset-2.disabled\\:pointer-events-none.disabled\\:opacity-50.\\[\\&_svg\\]\\:pointer-events-none.\\[\\&_svg\\]\\:size-4.\\[\\&_svg\\]\\:shrink-0.hover\\:bg-accent.hover\\:text-accent-foreground.h-9.rounded-md.px-3').click();
});