// @ts-check
const {test,expect}=require('@playwright/test')

test('Broken Images',async({page})=> {
await page.goto('https://the-internet.herokuapp.com/broken_images');


})