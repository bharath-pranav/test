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
  await page.getByText('Zoom Meetings').click();
  await page.getByRole('cell', { name: 'Meeting with Goutham' }).click();
  await expect(page.getByTestId('drawer')).toContainText('Meeting Details');
  await expect(page.getByTestId('drawer')).toMatchAriaSnapshot(`
    - paragraph: Overall Score
    - paragraph: /\\d+\\.\\d+/
    - paragraph: /out of \\d+/
    - paragraph: Section Scores
    - paragraph: Sales Effectiveness & Objection Handling
    - paragraph: /\\d+\\.\\d+\\/\\d+/
    - paragraph: Call Preparation & Structure
    - paragraph: /\\d+\\.\\d+\\/\\d+/
    - paragraph: Deal Progression & Commitment
    - paragraph: /\\d+\\.\\d+\\/\\d+/
    - paragraph: Intent & Sentiment Analysis
    - paragraph: /\\d+\\.\\d+\\/\\d+/
    - paragraph: Discovery & Qualification
    - paragraph: /\\d+\\.\\d+\\/\\d+/
    - paragraph: Contact Information (1)
    - paragraph: Contact 1
    - link "View in HubSpot":
      - /url: https://app.hubspot.com/contacts/4047592/record/0-1/163368342280
      - img
      - paragraph: View in HubSpot
    - paragraph: Name
    - paragraph: deb.heaphy Heaphy
    - paragraph: Company
    - paragraph: debheaphy7464
    - paragraph: Title
    - paragraph: Founder
    - paragraph: Email
    - paragraph: deb.heaphy@northstar-cx.com
    - paragraph: Demo Scheduled
    - paragraph: Not provided
    - paragraph: Billing Cycle
    - paragraph: Not provided
    - paragraph: Detail Evaluation
    - paragraph: Meeting Recording
    - paragraph: Select a time to view transcript
    - paragraph: Hey there Hi How are you I'm doing good How are you I'm good
    - paragraph: /3:\\d+/
    - paragraph: Goutham Govindaraj
    - paragraph: /0:\\d+/
    - paragraph: /0:\\d+/
    - text: 1x
    - button:
      - img: /\\d+/
    - button:
      - img
    - button:
      - img: /\\d+/
    - button:
      - img
    - paragraph: Meeting Analysis
    - button "Chapters"
    - button "Highlights (5)"
    - button "Individual Report"
    - paragraph: Meeting Chapters
    - text: Chapter 1
    - paragraph: Initial Call Introduction and Rapport Building
    - button:
      - img
    - text: Chapter 2
    - paragraph: Customer Requirements Discovery
    - button:
      - img
    - text: Chapter 3
    - paragraph: Technical Platform Capabilities Exploration
    - button:
      - img
    - text: Chapter 4
    - paragraph: Platform Analytics and Reporting Discussion
    - button:
      - img
    - text: Chapter 5
    - paragraph: Pricing Plan Selection and Trial Offer
    - button:
      - img
    - paragraph: Choose Topics
    - button "Discovery & Qualification":
      - button "Discovery & Qualification":
        - img
    - img
    - paragraph: Did the rep identify specific business outcomes the prospect hopes to achieve?
    - paragraph: The rep asked about the prospect's needs and timeline, and the prospect explained their objective is 'to gain an understanding of the appetite in market for this particular product that the startup is is offering'.
    - img
    - paragraph: Did the rep uncover who else in the organization would be involved in the decision-making process?
    - paragraph: The prospect stated 'it's kind of my own consulting business It's just me I'm a sole trader', indicating they are the sole decision-maker.
    - img
    - paragraph: Did the rep clarify the prospect's decision-making process for this solution?
    - paragraph: The prospect mentioned their need is 'pretty urgent' and 'it's just been approved and signed off by the client', but the rep did not delve into the specifics of their decision-making process.
    - img
    - paragraph: Did the rep identify the current systems or technologies that would need integration?
    - paragraph: While the prospect mentioned being familiar with 'Qualtrix' and 'SurveyMonkey', the rep did not specifically ask about current systems or integration needs beyond that.
    - img
    - paragraph: Did the rep uncover specific challenges the prospect is facing?
    - paragraph: The prospect's primary challenge is finding a survey platform that meets specific functional requirements, such as 'redirect links at the end of the survey' and the ability to 'play video within the survey'.
    - img
    - paragraph: Did the rep establish the priority level and implementation timeline?
    - paragraph: The prospect stated their requirement is 'pretty urgent' and 'I need to kind of turn it around pretty quickly' because the project has been 'approved and signed off by the client'.
    - img
    - paragraph: Did the rep identify which specific capabilities would be most valuable to the prospect?
    - paragraph: The prospect explicitly stated their key requirements are 'redirect links at the end of the survey' and the ability to 'play video within the survey'.
    - img
    - paragraph: Did the rep uncover any potential dealbreakers or non-negotiable requirements?
    - paragraph: The prospect emphasized the need for 'redirect links' and the ability to 'play video within the survey', and also mentioned looking for a 'cheap but not not a you know free version of a of a survey platform', indicating price is a factor.
    - img
    - paragraph: Did the rep determine the prospect's current solution status and reasons for change?
    - paragraph: The prospect is currently using 'Qualtrics' and 'SurveyMonkey' and found SurveySparrow 'seemed to offer you know more than SurveyMonkey And was reasonably priced', indicating a reason for exploring alternatives.
    - img
    - paragraph: Did the rep clarify the prospect's typical procurement process?
    - paragraph: The prospect mentioned the project is 'approved and signed off by the client', but the rep did not ask about their typical procurement process for software.
    - img
    - paragraph: Did the rep identify who controls the budget and the prospect's role in that decision?
    - paragraph: The prospect mentioned the project is 'approved and signed off by the client', but the rep did not clarify who controls the budget or the prospect's role in that decision.
    - heading "Summary" [level=3]
    - img "brief-summary"
    - heading "A Brief summary of this call" [level=3]
    - paragraph: introduction
    - paragraph: The call began with pleasantries and introductions. The sales rep acknowledged the prospect's profile and expressed a desire to learn from them. The rep stated the purpose of the call was to discuss pricing for SurveySparrow, as the prospect had signed up and had a background in customer experience.
    - paragraph: discovery
    - paragraph: /The prospect is a sole trader consultant working on a market research project for a startup\\. They need a survey platform for a specific project requiring redirect links \\(at least 3\\) based on survey outcomes \\(screened out, errors\\) to redirect back to a panel provider\\. They also need to play two separate videos within the survey and ask questions about them\\. The survey will have around \\d+ questions, with two videos of about a minute each\\./
    - paragraph: pain points
    - paragraph: •
    - paragraph: Need for redirect links based on survey outcomes.
    - paragraph: •
    - paragraph: Requirement to play videos within the survey.
    - paragraph: •
    - paragraph: Seeking a cost-effective solution for a sole trader.
    - paragraph: value proposition
    - paragraph: The sales rep positioned SurveySparrow as a platform that can meet the prospect's specific needs, including video playback within surveys and redirect capabilities. They highlighted the platform's relevance for market research and customer experience, and offered to demonstrate its analytical capabilities.
    - paragraph: demo
    - paragraph: The sales rep briefly demonstrated how to add a video question by inputting a URL. They showed how a video would play and how follow-up questions could be asked. They also touched upon the platform's analytics capabilities, including dashboards and 'Cogniview' for key driver analysis, though the prospect indicated familiarity with similar features.
    - paragraph: objections
    - paragraph: The prospect expressed concern about YouTube ads if videos are hosted on a free channel. They also inquired about the cost-effectiveness and the specific differences between the 'Basic' and 'Starter' plans.
    - paragraph: feature requests
    - paragraph: •
    - paragraph: Ability to upload MP4 videos directly to the platform.
    - paragraph: •
    - paragraph: Hosting videos within the platform for linking.
    - paragraph: commercials
    - paragraph: /The prospect is looking for the 'cheapest individual account' and is considering the 'Basic' or 'Starter' plan\\. They need to accommodate \\d+ responses and are a single user\\. The rep explained the differences between plans, focusing on response volume, features, and analytics\\./
    - paragraph: timelines
    - paragraph: The prospect stated their requirements are 'pretty urgent' as the project has been approved and signed off by the client, requiring a quick turnaround.
    - paragraph: positive moments
    - paragraph: •
    - paragraph: Prospect expressed familiarity with survey platform capabilities, indicating they understand the value of advanced features.
    - paragraph: •
    - paragraph: Prospect found the demonstrated features 'very familiar' and 'looks good'.
    - paragraph: negative moments
    - paragraph: •
    - paragraph: Prospect found the pricing site 'very annoying' and difficult to navigate.
    - paragraph: •
    - paragraph: Concern about YouTube ads if videos are hosted on a free channel.
    - paragraph: themes
    - paragraph: •
    - paragraph: "Survey Platform Functionality: Discussion centered on the need for specific features like video playback and redirects."
    - paragraph: •
    - paragraph: "Pricing and Value: The prospect is budget-conscious and seeking the most cost-effective solution for their needs."
    - paragraph: •
    - paragraph: "Analytics Capabilities: While familiar with advanced analytics, the prospect is evaluating if SurveySparrow's built-in features meet their needs or if they will export data."
    - paragraph: Competitors mentioned
    - paragraph: Not discussed
    - paragraph: deal value mentions
    - paragraph: No specific pricing amounts or budget figures were mentioned, only a desire for the 'cheapest individual account' and consideration of 'Basic' or 'Starter' plans.
    - paragraph: action items
    - paragraph: •
    - paragraph: Sales rep to send a link for a free trial of the 'Starter' plan to the prospect.
    - paragraph: •
    - paragraph: Sales rep to check with their team regarding the capability of uploading videos directly to the platform and provide an update to the prospect.
    - paragraph: •
    - paragraph: Prospect to sign up for the trial and evaluate the platform's capabilities.
    - paragraph: keywords
    - paragraph: Market Research
    - paragraph: Survey Platform
    - paragraph: Redirect Links
    - paragraph: Video Playback
    - paragraph: Sole Trader
    `);
  await expect(page.getByTestId('drawer')).toContainText('A Brief summary of this callintroductionThe call began with pleasantries and introductions. The sales rep acknowledged the prospect\'s profile and expressed a desire to learn from them. The rep stated the purpose of the call was to discuss pricing for SurveySparrow, as the prospect had signed up and had a background in customer experience.discoveryThe prospect is a sole trader consultant working on a market research project for a startup. They need a survey platform for a specific project requiring redirect links (at least 3) based on survey outcomes (screened out, errors) to redirect back to a panel provider. They also need to play two separate videos within the survey and ask questions about them. The survey will have around 10 questions, with two videos of about a minute each.pain points•Need for redirect links based on survey outcomes.•Requirement to play videos within the survey.•Seeking a cost-effective solution for a sole trader.value propositionThe sales rep positioned SurveySparrow as a platform that can meet the prospect\'s specific needs, including video playback within surveys and redirect capabilities. They highlighted the platform\'s relevance for market research and customer experience, and offered to demonstrate its analytical capabilities.demoThe sales rep briefly demonstrated how to add a video question by inputting a URL. They showed how a video would play and how follow-up questions could be asked. They also touched upon the platform\'s analytics capabilities, including dashboards and \'Cogniview\' for key driver analysis, though the prospect indicated familiarity with similar features.objectionsThe prospect expressed concern about YouTube ads if videos are hosted on a free channel. They also inquired about the cost-effectiveness and the specific differences between the \'Basic\' and \'Starter\' plans.feature requests•Ability to upload MP4 videos directly to the platform.•Hosting videos within the platform for linking.commercialsThe prospect is looking for the \'cheapest individual account\' and is considering the \'Basic\' or \'Starter\' plan. They need to accommodate 300 responses and are a single user. The rep explained the differences between plans, focusing on response volume, features, and analytics.timelinesThe prospect stated their requirements are \'pretty urgent\' as the project has been approved and signed off by the client, requiring a quick turnaround.positive moments•Prospect expressed familiarity with survey platform capabilities, indicating they understand the value of advanced features.•Prospect found the demonstrated features \'very familiar\' and \'looks good\'.negative moments•Prospect found the pricing site \'very annoying\' and difficult to navigate.•Concern about YouTube ads if videos are hosted on a free channel.themes•Survey Platform Functionality: Discussion centered on the need for specific features like video playback and redirects.•Pricing and Value: The prospect is budget-conscious and seeking the most cost-effective solution for their needs.•Analytics Capabilities: While familiar with advanced analytics, the prospect is evaluating if SurveySparrow\'s built-in features meet their needs or if they will export data.Competitors mentionedNot discusseddeal value mentionsNo specific pricing amounts or budget figures were mentioned, only a desire for the \'cheapest individual account\' and consideration of \'Basic\' or \'Starter\' plans.action items•Sales rep to send a link for a free trial of the \'Starter\' plan to the prospect.•Sales rep to check with their team regarding the capability of uploading videos directly to the platform and provide an update to the prospect.•Prospect to sign up for the trial and evaluate the platform\'s capabilities.keywordsMarket ResearchSurvey PlatformRedirect LinksVideo PlaybackSole Trader');
});