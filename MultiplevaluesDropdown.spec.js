// @ts-check
const {test,expect}=require('@playwright/test')

test('Multiplevalues Dropdown',async({page})=> {
await page.goto('https://api-stage.scrut.io');
await page.locator('//input[@id="email-text-input"]').fill('qasecured@scrut.io');
await page.locator('//button[@id="continue-button"]').click();
await page.locator('//button[@id="request-verification-code-button"]').click();
await page.locator('//input[@id="0"]').fill('695124');
await page.getByRole('button',{name:'Verify'}).click();
await page.getByRole('button',{name:'Got It!'}).click();
await page.getByRole('listitem').filter({hasText:'Controls'}).click();
await page.locator('//body[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]');
await page.waitForTimeout(10000)

})