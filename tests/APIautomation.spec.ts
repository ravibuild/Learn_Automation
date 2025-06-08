import {test,expect} from '@playwright/test';

test('Amazon Home Page ', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon/);
});  

test('Amazon Home Page Search ', async ({ page }) => {

  await page.goto('https://www.amazon.in/');

  await page.locator("//*[@id='nav-search']").waitFor();

  await page.locator("//*[@id='nav-search']").click();

  await page.locator("//*[@id='twotabsearchtextbox']").fill('LaptopStand');

  await page.keyboard.press('Enter');

  await page.waitForTimeout(5000);

});  