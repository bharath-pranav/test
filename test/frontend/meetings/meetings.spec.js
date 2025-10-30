const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByRole('button', { name: 'Email & Password' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('salestest@surveysparrow.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SalesAI@123');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByText('Zoom Meetings').click();
  await page.getByRole('textbox', { name: 'Past Days' }).click();
  await page.getByRole('textbox', { name: 'Past Days' }).fill('10');
  await page.getByRole('textbox', { name: 'Past Days' }).press('Enter');
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();