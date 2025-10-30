import { test, expect } from '@playwright/test';
import { CodeReviewPage } from './code-review.page';

test('Verify input code text area functionality', async ({ page }) => {
  const codeReviewPage = new CodeReviewPage(page);
  await codeReviewPage.goto();
  await codeReviewPage.verifyInputCodeLabel();
  await codeReviewPage.verifyInputCodePlaceholder();
  await codeReviewPage.fillInputCode('console.log("Hello, World!");');
  await codeReviewPage.verifyInputCodeValue('console.log("Hello, World!");');
});

test('Verify Review Code button functionality', async ({ page }) => {
  const codeReviewPage = new CodeReviewPage(page);
  await codeReviewPage.goto();
  await codeReviewPage.verifyReviewCodeButtonDisabled();
  await codeReviewPage.fillInputCode('console.log("Hello, World!");');
  await codeReviewPage.verifyReviewCodeButtonEnabled();
  await codeReviewPage.clickReviewCodeButton();
  await codeReviewPage.verifyCodeReviewProcessTriggered();
});

test('Verify code review process and feedback', async ({ page }) => {
  const codeReviewPage = new CodeReviewPage(page);
  await codeReviewPage.goto();
  await codeReviewPage.verifyCodeReviewProcessAndFeedback();
});

test('Verify modal dialog for configuring code review', async ({ page }) => {
  const codeReviewPage = new CodeReviewPage(page);
  await codeReviewPage.goto();
  await codeReviewPage.verifyConfigureCodeReviewModal();
  await codeReviewPage.verifyReviewFocusAreasSection();
  await codeReviewPage.toggleFocusAreaSelection();
  await codeReviewPage.verifyEnableAllCheckboxToggle();
  await codeReviewPage.verifyCustomReviewFocusSection();
  await codeReviewPage.clickCancelButton();
  await codeReviewPage.clickStartReviewButton();
});

test('Verify code review process handles different types of code inputs', async ({ page }) => {
  const codeReviewPage = new CodeReviewPage(page);
  await codeReviewPage.goto();
  await codeReviewPage.verifyCodeReviewProcessHandlesValidCode();
  await codeReviewPage.verifyCodeReviewProcessIdentifiesErrors();
  await codeReviewPage.verifyCodeReviewProcessHandlesLongCode();
  await codeReviewPage.verifyCodeReviewProcessProvidesFeedback();
});

test('Verify code review process performance', async ({ page }) => {
  const codeReviewPage = new CodeReviewPage(page);
  await codeReviewPage.goto();
  await codeReviewPage.measureProcessingTimeForValidCode();
  await codeReviewPage.measureProcessingTimeForLongCode();
  await codeReviewPage.verifyConsistentPerformanceUnderHighLoad();
});

test('Verify code review process accessibility', async ({ page }) => {
  const codeReviewPage = new CodeReviewPage(page);
  await codeReviewPage.goto();
  await codeReviewPage.verifyKeyboardNavigation();
  await codeReviewPage.verifyScreenReaderSupport();
  await codeReviewPage.verifyHighContrastAndReadability();
  await codeReviewPage.verifyMotorDisabilitySupport();
});
