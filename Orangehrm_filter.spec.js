import {test, expect} from '@playwright/test'

test('OrangeHRM filtering locator', async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('username').fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");
    await page.getByRole('button', {name:'Login'}).click();
    // await page.getByRole('listitem').filter({hasText:/Leave/}).click();
    await page.getByRole('listitem').filter({has: page.getByRole('link', {name:'Leave'}) }).click();
    await page.waitForTimeout(10000);

})
 