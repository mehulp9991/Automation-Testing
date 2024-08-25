// @ts-check
const {test,expect}=require('@playwright/test')

test('CheckBox',async({page})=> {
await page.goto('https://demoqa.com/automation-practice-form');
await page.locator('//label[normalize-space()="Sports"]').click();
await page.locator('//label[normalize-space()="Reading"]').check();
await page.locator('//label[normalize-space()="Sports"]').click();
await page.waitForTimeout(10000)

})