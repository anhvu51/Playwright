
import { test, expect } from '@playwright/test';

test.describe('Login with Admin Account', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://mcall-uat.motionscloud.com/users/sign_in?locale=en');
  });

  test('Login MCS with admin credential', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page.locator('xpath=//*[@id="user_email"]')).toBeEnabled();
    await page.locator('xpath=//*[@id="user_email"]').fill('hunghq8988@gmail.com');
    await page.locator('xpath=//*[@id="user_password"]').fill('Mcall@123');
    await page.locator('xpath = //input[@name="commit"]').click();
    await expect(page.locator('xpath=//*[@id="search_claim_form"]//button[@type="submit"]')).toBeEnabled();
  });

  test('Login MCS with admin credential 1', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page.locator('xpath=//*[@id="user_email"]')).toBeEnabled();
    await page.locator('xpath=//*[@id="user_email"]').fill('hunghq8988@gmail.com');
    await page.locator('xpath=//*[@id="user_password"]').fill('Mcall@123');
    await page.locator('xpath = //input[@name="commit"]').click();
    await expect(page.locator('xpath=//*[@id="search_claim_form"]//button[@type="submit"]')).toBeEnabled();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});