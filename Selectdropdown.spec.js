//@ts-check

const{ test, expect} = require('@playwright/test')

test('SelectDropdown',async({page}) =>{

    await page.goto('https://www.saucedemo.com/v1/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill("standard_user");
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill("secret_sauce");
    await page.getByRole('button',{name:"Login"}).click();
    await page.locator('//select[@class="product_sort_container"]').selectOption({label:"Name (Z to A)"});

    
    await page.waitForTimeout(10000);

})