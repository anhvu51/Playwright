
import { test, expect } from '@playwright/test';

test.describe('Delete SIA', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://sia-qa.motionscloud.com/users/sign_in');
  });

  test('Delete data SIA', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page.locator('xpath=//*[@id="user_email"]')).toBeEnabled();
    await page.locator('xpath=//*[@id="user_email"]').fill('qcemailtest.9999@gmail.com');
    await page.locator('xpath=//*[@id="user_password"]').fill('Mcall123@');
    await page.locator('xpath = //input[@name="commit"]').click();
    await expect(page.locator('xpath=//*[@id="query_"]')).toBeEnabled();

    // await page.locator('xpath=//*[@id="filter_attribute_name"]').click();
    // await page.locator('xpath=//option[contains(text(),"WorldTracer No.")]').click();
    let wtn = page.locator('xpath=//tbody/tr[1]/td[1]');
    let wtn_delete = "QAQAQ80848";
    while (wtn = wtn_delete){
      await page.locator('xpath=//tbody/tr[1]/td[9]/a[1]').click();
      await page.locator('xpath=//a[contains(text(),"Delete Case")]').click();
      await page.locator('xpath=//a[contains(text(),"Yes")]').click()
    }
    // let wtn_delete = "QAQAQ80848";
    // const wtn = page.locator('xpath=//tbody/tr[1]/td[1]');
    // await page.locator('xpath=//input[@id="query_"]').fill(wtn);
    // await page.locator('xpath=//body/div[@id="wrapper"]/div[2]/div[1]/div[1]/form[1]/div[2]/div[3]/div[1]/input[1]').click();
    // for (let i = 0; i < 200; i++) {
    //   if(wtn = wtn_delete)(
    //     await page.locator('xpath=//tbody/tr[1]/td[9]/a[1]').click();
    //     await page.locator('xpath=//a[contains(text(),"Delete Case")]').click();
    //     await page.locator('xpath=//a[contains(text(),"Yes")]').click();

    //   )
    // }
    await page.locator('xpath=//*[@id="insurers_table"]/tbody/tr[1]/td[5]/a[1]/img').click();
    await page.locator('xpath=//*[@id="sidebar-wrapper"]//li[6]').click();
    await expect(page.locator('xpath=//input[@name="commit"]')).toBeEnabled();
    //User management
  //   var checkBox=page.evaluate(page.locator('xpath//*[@id="feature_user_management"]/../..').click=false);
  //   if (checkBox==true){
  //     console.log('needtocheck');
  //     await page.locator('xpath//*[@id="feature_user_management"]/../..').click();
  //     awa
  //   } else {
  //     console.log('checked');
  //   }
  const status = await page.locator('xpath=//*[@id="feature_user_management"]').evaluate(node => node.checked);
    console.log(status);
    if (status === false)
      {
        await page.locator('xpath=//*[@id="feature_user_management"]/../..').click();
      }
    await page.locator('xpath=//input[@value="Save"]').click();
    await expect.soft(page.getByText('Successfully updated feature access')).toBeVisible;
   });
  
  test.afterEach(async ({ page }) => {
    await page.close();
  });
});