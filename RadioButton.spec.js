// @ts-check
const {test,expect}=require('@playwright/test')

test('RadioButton',async({page})=> {
await page.goto('https://demoqa.com/automation-practice-form');
await page.locator('//label[normalize-space()="Male"]').click();
await page.locator('//label[normalize-space()="Female"]').check();
await page.locator('//label[normalize-space()="Other"]').check();
await page.waitForTimeout(10000)

})