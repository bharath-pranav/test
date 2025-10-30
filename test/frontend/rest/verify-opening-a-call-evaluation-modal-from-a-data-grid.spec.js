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
  await page.getByText('Outbound Calls').click();
  await page.getByRole('cell', { name: 'Nandhini R' }).nth(2).click();
  await page.getByText('Overall Score').click();
  await page.getByText('Section Scores').click();
  await page.getByText('Detail Evaluation').click();
  await page.getByText('Call Recording').click();
  await page.getByTestId('button').nth(5).click();
  await page.getByRole('button').filter({ hasText: '10' }).nth(1).dblclick();
  await page.getByTestId('button').nth(4).dblclick();
  await page.getByTestId('button').nth(5).click();
  await page.getByText('1x').click();
  await page.getByText('2x').click();
  await page.getByText('2x').click();
  await page.getByText('0.5x').click();
  await page.getByRole('button', { name: 'Opening' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Relevance & Alignment' }).click();
  await page.getByRole('button', { name: 'Relevance & Alignment' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Proof Points' }).click();
  await page.getByRole('button', { name: 'Proof Points' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Pitch & Value Proposition' }).click();
  await page.getByRole('button', { name: 'Pitch & Value Proposition' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Objection Handling' }).click();
  await page.getByRole('heading', { name: 'Call Summary' }).click();
  await page.getByTestId('button').nth(3).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();