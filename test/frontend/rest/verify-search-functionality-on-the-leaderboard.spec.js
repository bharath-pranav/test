const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    storageState: '/Users/madan.gopal/Downloads/Asura.ai/app/storageState-project-1759851588968.json'
  });
  const page = await context.newPage();

  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.waitForLoadState('domcontentloaded');
  await page.getByText('Leaderboard').click();

  const searchBox = page.getByRole('textbox', { name: 'Search by name, email, cue' });
  await searchBox.click();
  await searchBox.fill('sherin');
  await page.getByText('Sherin James').isVisible();

  await searchBox.click();
  await searchBox.press('ControlOrMeta+a');
  await searchBox.fill('dgw');
  await page.getByText('No team members found').isVisible();

  await page.close();
  await context.close();
  await browser.close();
})();
