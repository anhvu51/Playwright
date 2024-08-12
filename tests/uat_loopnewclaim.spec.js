
import { test, expect } from '@playwright/test';


test.describe('Login with Admin Account', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://mcall-uat.motionscloud.com/users/sign_in?locale=en');
  })});

  test('Login MCS with admin credential 1', async ({ page }) => {
    test.setTimeout(999999999);
    await page.goto('https://mcall-uat.motionscloud.com/users/sign_in?locale=en');
    await expect(page.locator('xpath=//*[@id="user_email"]')).toBeEnabled();
    await page.locator('xpath=//*[@id="user_email"]').fill('qcemailtest.9999+vhvuat_insureradmin@gmail.com');
    await page.locator('xpath=//*[@id="user_password"]').fill('Mcall@123');
    await page.locator('xpath = //input[@name="commit"]').click();
    await expect(page.locator('xpath=//body/div[@id="wrapper"]/div[1]/div[2]//div[2]/a[1]')).toBeEnabled();
    
     for (let i = 2000; i < 2500; i++) {
      // New claim from dash board 
    await page.locator('xpath=//strong[contains(text(),"New case")]').click();
    await expect(page.locator('xpath=//input[@id="submitClaim"]')).toBeEnabled();
    // Case number
    await page.locator('xpath=//input[@id="claim_claim_number"]').click();
    await page.locator('xpath=//input[@id="claim_claim_number"]').fill('QA_07080'+i);
   // MCall Fall
    await page.locator('xpath=//body/div[@id="wrapper"]/div[1]/div[2]/form[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/button[1]/div[1]').click();
    await page.locator('xpath=//body/div[@id="wrapper"]/div[1]/div[2]//ul[1]/li[2]/a[1]').click();
    // // GDV Fall VHV Weiterleitung
    await page.locator('xpath=//body/div[@id="wrapper"]/div[1]/div[2]/form[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/button[1]/div[1]').click();
    await page.locator('xpath=//body/div[@id="wrapper"]//div[1]/div[5]//li[2]/a[1]').click();
    // // GDV Fall MCall
    await page.locator('xpath=//body/div[@id="wrapper"]/div[1]/div[2]/form[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/button[1]/div[1]').click();
    await page.locator('xpath=//body/div[@id="wrapper"]//div[1]/div[6]//li[2]/a[1]').click();
    await page.waitForTimeout(6000);
    await page.locator('xpath=//input[@id="submitClaim"]').click();
    // await page.waitForTimeout(1000);
    await page.locator('xpath=//a[contains(text(),"Dashboard")]').click();
  }});

  // test.afterEach(async ({ page }) => {
  //   await page.close();
  // });
