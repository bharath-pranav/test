const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    storageState: '/Users/madan.gopal/Downloads/Asura.ai/app/storageState-project-1759851588968.json'
  });

  const page = await context.newPage();
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByText('Talk Vision').click();
  await page.locator('div:nth-child(3) > .flex > .flex-1 > .twigs-c-jUOAJi > .twigs-select__control > .twigs-select__value-container > .twigs-select__input-container').click();

  const button = page.getByRole('button', { name: 'Get Started' });
  const className = await button.getAttribute('class');
  if (!className.includes('opacity-50') || !className.includes('cursor-not-allowed')) throw new Error('Button is active');

  await page.close();
  await context.close();
  await browser.close();
})();
