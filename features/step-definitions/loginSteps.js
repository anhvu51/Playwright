const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../../pages/LoginPage');

let browser;
let page;
let loginPage;

Given('I s to the login page', async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  loginPage = new LoginPage(page);

  await loginPage.navigateTo('https://example.com/login');
});

When('I enter valid credentials', async () => {
  await loginPage.login('testuser', 'testpassword');
});

Then('I should be redirected to the dashboard', async () => {
  const title = await loginPage.getTitle();
  if (title !== 'Dashboard') {
    throw new Error(`Expected title to be 'Dashboard', but got '${title}'`);
  }

  await browser.close();
});