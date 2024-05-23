
import { test, expect } from '@playwright/test';

test.describe('Login with Admin Account', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://mcall-uat.motionscloud.com/users/sign_in?locale=en');
  });

  test('Login MCS with admin credential', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page.locator('xpath=//*[@id="user_email"]')).toBeEnabled();
    await page.locator('xpath=//*[@id="user_email"]').fill('qcemailtest.9999+uat_admin@gmail.com');
    await page.locator('xpath=//*[@id="user_password"]').fill('Mcall@123');
    await page.locator('xpath = //input[@name="commit"]').click();
    await expect(page.locator('xpath=//*[@id="search_claim_form"]//div/div[7]/button')).toBeEnabled();
    //Feature Access
    await page.locator('xpath= //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a').click();
    await page.locator('ul#navbar-dropdown > li:nth-child(2)').click();
    await page.locator('xpath=//input[@id="search"]').fill('QA UAT NEW');
    await page.locator('xpath=//button[contains(text(),"Search")]').click();
    await page.locator('xpath=//*[@id="insurers_table"]/tbody/tr[1]/td[5]/a[1]/img').click();
    await page.locator('xpath=//*[@id="sidebar-wrapper"]//li[6]').click();
    await page.locator('#edit_feature_135 > div.mcall-form > div:nth-child(2) > div > div > div.mcall-card-item.col-sm-12.col-md-3.user_management > div > div > div').click();
    // await page.locator('.mcall-checkbox-circle input#feature_user_management').click();
    // await page.locator('xpath=//*[@id="edit_feature_135"]/////div[1]/div/div/div').click();
    await page.locator('xpath=//input[@name="commit"]').click();
    await page.waitForTimeout(2000);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});