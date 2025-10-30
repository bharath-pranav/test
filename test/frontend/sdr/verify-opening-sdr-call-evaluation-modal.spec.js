import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.locator('div:nth-child(3) > .twigs-c-PJLV.twigs-c-PJLV-igyEEtX-css > .flex.items-center.gap-2 > .flex > svg').click();
  await page.locator('div:nth-child(3) > .twigs-c-PJLV.twigs-c-PJLV-igyEEtX-css > .flex.items-center.gap-2 > .flex > svg').click();
  await page.getByText('SDR').click();
  await page.getByRole('cell', { name: 'Harish Anbazhagan' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Overall Score');
  await expect(page.getByTestId('drawer')).toContainText('Section Scores');
  await expect(page.getByTestId('drawer')).toContainText('Call Recording');
  await expect(page.getByTestId('drawer')).toContainText('PPredrag SpasojevićDirector at houseofwinCall Duration3:09Call OutcomeConnectedCall TimeApril 24, 2025 at 05:30');
  await expect(page.getByTestId('drawer')).toContainText('A Brief summary of this callopenerReferral-based opener mentioning the prospect\'s free trial signup, using a direct approachcompany introductionIntroduced Survey Sparrow as a survey tool, spelling out the company name and explaining the trial processpitchPositioned as a dedicated point of contact offering support for pricing, plans, and featuresobjection handlingNo significant objections were raised; the SDR proactively offered email supportclosingSoft close with an offer to help via email and a friendly goodbyepositive moments• Clear articulation of company name and spelling• Proactive offer to be a dedicated point of contact• Provided email for future communication• Maintained a friendly and professional tonenegative moments• Limited probing of prospect\'s specific survey needs• No attempt to book a demo or move to next sales stage• Minimal value proposition exploration• Lack of deep qualification questions');
});