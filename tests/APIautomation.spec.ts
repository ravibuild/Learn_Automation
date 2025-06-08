import {test,expect} from '@playwright/test';

test('Amazon Home Page ', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon/);
});