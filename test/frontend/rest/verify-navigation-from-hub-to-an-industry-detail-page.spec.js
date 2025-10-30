const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    storageState: '/Users/madan.gopal/Downloads/Asura.ai/app/storageState-project-1759851588968.json'
  });
  const page = await context.newPage();
  await page.goto('https://sales-ai-enabler.vercel.app/sales-enablement/industry');
  await page.getByRole('link', { name: 'Industry Icon Casino Resorts' }).click();
  await page.getByText('Feature Mapping').click();
  await page.getByText('Sales Pitches').click();
  await page.getByText('Selling Points').click();
  await page.getByText('Objection Handling Playbook').click();
  await page.getByRole('button', { name: 'Budget/Price Concerns' }).click();
  await page.getByRole('button', { name: 'Technical Limitations' }).click();
  await page.getByRole('button', { name: 'Technical Limitations' }).click();
  await page.getByRole('button', { name: 'Implementation Challenges' }).click();
  await page.getByRole('button', { name: 'Implementation Challenges' }).click();
  await page.getByRole('button', { name: 'Security/Compliance' }).click();
  await page.getByRole('button', { name: 'Security/Compliance' }).click();
  await page.getByRole('button', { name: 'Competitive Comparisons' }).click();
  await page.getByRole('button', { name: 'Competitive Comparisons' }).click();
  await page.getByRole('button', { name: 'Resource Requirements' }).click();
  await page.getByRole('button', { name: 'Resource Requirements' }).click();
  await page.getByRole('button', { name: 'Timeline/Urgency' }).click();
  await page.getByRole('button', { name: 'Timeline/Urgency' }).click();
  await page.getByRole('button', { name: 'Change Management' }).click();
  await page.getByRole('button', { name: 'Change Management' }).click();
  await page.getByRole('button', { name: 'Change Management' }).nth(1).click();
  await page.getByRole('button', { name: 'Change Management' }).click();
  await page.getByRole('button', { name: 'ROI/Value Proposition' }).click();
  await page.getByRole('button', { name: 'ROI/Value Proposition' }).click();
  await page.getByRole('button', { name: 'Integration Concerns' }).click();
  await page.getByRole('button', { name: 'Integration Concerns' }).click();
  await page.getByRole('button', { name: 'Gaming Compliance and' }).click();
  await page.getByText('Video Section').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.swiper-button-next').click();
  await page.getByText('Testimonials', { exact: true }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();