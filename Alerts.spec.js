//@ts-check

const{test, expect} = require('@playwright/test')

test('Alerts', async({page}) =>{
await page.goto('https://seleniumbase.com')
 const title = await page.title('//title[normalize-space()="Web Testing Page"]')

 await expect(title).toBe("Web Testing Page");

})