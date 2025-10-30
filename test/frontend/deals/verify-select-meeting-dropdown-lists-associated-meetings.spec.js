import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByRole('img').nth(2).click();
  await page.getByRole('img').nth(2).click();
  await page.getByText('Deals', { exact: true }).click();
  await page.getByRole('cell', { name: 'ID.me - New Deal' }).click();
  await page.getByText('Choose TopicsDiscovery & QualificationSelect Meeting81569417248').click();
  await page.getByRole('button', { name: '81569417248' }).nth(1).click();
  await expect(page.getByTestId('drawer')).toContainText('81569417248');
  await page.getByRole('button', { name: '81569417248' }).nth(1).click();
  await page.getByRole('menuitem', { name: '85879252531' }).click();
  await expect(page.getByTestId('drawer')).toContainText('85879252531');
  await expect(page.getByTestId('drawer')).toContainText('Did the rep acknowledge all relevant stakeholders in the buying process?The rep acknowledged multiple stakeholders, including Nadezh (the prospect), Trent Ward (enterprise director), Sahil (solutions engineer), Karthik (product manager), and Navneet (product head). The rep also asked about the prospect\'s team structure regarding recommendations: \'do you have a separate team that looks into it or is it just now that your team that does the survey can also look into, you know, the analysis and tending over a period of time?\'');
});