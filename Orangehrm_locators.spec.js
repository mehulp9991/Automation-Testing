import { test, expect } from '@playwright/test';

test('OrangeHRM locators', async ({ page }) => {
  
await page.goto('https://opensource-demo.orangehrmlive.com/');
console.log(await page.getByLabel('Password'));
await page.getByPlaceholder('username').fill("Admin");
await page.getByPlaceholder('password').fill("admin123");
await page.getByRole('button', {name:'Login'}).click();
await page.getByAltText('profile picture').click();
await page.getByText('Logout').click();
await page.waitForTimeout(10000);
});