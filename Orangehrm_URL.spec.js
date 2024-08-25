// @ts-check

const { test, expect} = require('@playwright/test');

test('Validate OrangeHRm website URL',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page).toHaveURL(/.*orangehrmlive/);

})