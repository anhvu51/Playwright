
import { test, expect } from '@playwright/test';

test.describe('Login with Admin Account', () => {
  
test.beforeEach(async ({ page }) => {
  await page.goto('https://mcall-qa.motionscloud.com/users/sign_in?locale=en');
  console.log('MCS');
});
  
  test('Direr', async ({ page }) => {
    // Assertions use the expect API.
    await page.goto('https://direr-qa.motionscloud.com/users/sign_in');
    console.log('Direr');
    await page.close();
  });
});