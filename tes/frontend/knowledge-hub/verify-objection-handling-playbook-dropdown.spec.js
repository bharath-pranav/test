import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutes timeout

test.use({
  storageState: '/Users/Kabeleswar.pe/Library/Application Support/aitest-case-generator/storage/storageState-project-1761643271788.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sales-ai-enabler.vercel.app/');
  await page.getByTestId('button').nth(1).click();
  await page.getByRole('link', { name: 'Industry Icon Casino Resorts' }).click();
  await page.getByText('Objection Handling Playbook').click();
  await page.getByRole('button', { name: 'Budget/Price Concerns' }).click();
  await expect(page.getByText('Casino ResortsObjection Handling PlaybookCasino ResortsObjection Handling')).toBeVisible();
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - paragraph: Casino Resorts
    - img
    - paragraph: Objection Handling Playbook
    - img
    - paragraph: Casino Resorts
    - paragraph: Objection Handling Playbook
    - paragraph: Casino resorts are luxury entertainment venues that offer gambling, high-end accommodations, fine dining, and exclusive leisure experiences.
    - button "Budget/Price Concerns":
      - paragraph: Budget/Price Concerns
      - img
    - img
    - paragraph: Customer Says
    - paragraph: "\\"SurveySparrow seems expensive compared to basic survey tools we've used before.\\""
    - heading "Counter Strategies" [level=3]
    - img
    - paragraph: Primary Response
    - paragraph: I understand budget is a key consideration. SurveySparrow offers specialized features for casino resorts like real-time VIP alerts, AI-powered sentiment analysis, and integration with player tracking systems that provide significantly more value than basic tools.
    - img
    - paragraph: Value Reinforcement
    - paragraph: By identifying and resolving high-roller concerns immediately, you can prevent revenue loss and increase loyalty among your most valuable guests. Our AI-driven insights help you understand the 'why' behind guest satisfaction, not just the 'what'.
    - img
    - paragraph: Proof Point
    - paragraph: /One of our casino clients saw a \\d+% increase in VIP guest satisfaction, a \\d+% boost in high-roller retention, and a 7% revenue increase within 3 months of implementing our comprehensive CX solution\\./
    - img
    - paragraph: Customer Says
    - paragraph: "\\"We're facing budget cuts - how can we justify this expense?\\""
    - heading "Counter Strategies" [level=3]
    - img
    - paragraph: Primary Response
    - paragraph: I understand budget constraints are challenging. SurveySparrow can actually help you optimize your spending by identifying areas for improvement and preventing costly guest issues through predictive analytics and targeted insights.
    - img
    - paragraph: Value Reinforcement
    - paragraph: By leveraging our AI-powered CogniVue text analytics and Executive Dashboard, you can allocate your budget more effectively, focusing on changes that will have the biggest impact on guest satisfaction and revenue.
    - img
    - paragraph: Proof Point
    - paragraph: /A casino using our system was able to reduce their marketing spend by \\d+% while increasing guest acquisition by \\d+% by using data-driven insights to target their most effective channels and personalize guest experiences\\./
    - img
    - paragraph: Customer Says
    - paragraph: "\\"We're interested, but we've already allocated our tech budget for the year.\\""
    - heading "Counter Strategies" [level=3]
    - img
    - paragraph: Primary Response
    - paragraph: I understand budget constraints can be challenging. Many of our clients find that SurveySparrow's comprehensive CX platform pays for itself quickly through operational improvements, reduced guest churn, and increased revenue.
    - img
    - paragraph: Value Reinforcement
    - paragraph: We offer flexible payment options and our solution often results in cost savings through improved operational efficiency, reduced comps, and more targeted marketing efforts.
    - img
    - paragraph: Proof Point
    - paragraph: A mid-size casino was able to fund their entire SurveySparrow implementation through savings from reduced comps, improved guest recovery strategies, and more efficient marketing spend within the first quarter of use.
    `);
});