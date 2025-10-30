import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByRole('textbox', { name: 'Search Industry or Ask' }).click();
  await page.getByRole('textbox', { name: 'Search Industry or Ask' }).fill('give me pain points from the fashion industry');
  await page.getByRole('textbox', { name: 'Search Industry or Ask' }).press('Enter');
  await page.waitForTimeout(15000);
  await expect(page.getByRole('main')).toContainText('give me pain points from the fashion industry');
  await expect(page.getByRole('main')).toContainText('Here are some key pain points in the fashion industry: 1. Sustainability Challenges • High environmental impact of clothing production • Growing consumer demand for eco-friendly and ethical manufacturing • Pressure to reduce waste and carbon footprint 2. Supply Chain Complexity • Global sourcing challenges • Inventory management and overproduction • Long lead times between design and market delivery 3. Rapidly Changing Consumer Preferences • Quick trend cycles • Difficulty predicting and adapting to fast-changing fashion trends • Balancing between trendy and timeless designs 4. Digital Transformation • Need for robust e-commerce platforms • Integrating online and offline shopping experiences • Implementing effective digital marketing strategies 5. Pricing Pressures • Competitive pricing in a saturated market • Balancing quality with affordable pricing • Managing production costs while maintaining profitability 6. Customer Experience • Providing personalized shopping experiences • Managing size and fit inconsistencies • Handling returns and exchanges efficiently 7. Technology Adoption • Implementing AI and machine learning for trend prediction • Using data analytics for consumer insights • Adopting virtual try-on and augmented reality technologies These pain points highlight the complex and dynamic nature of the fashion industry, requiring continuous innovation and adaptability.');
});