import {test, expect} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto('https://www.google.com/');
})

test.afterEach(async({page})=>{
    await page.close();

})

test('Title Check', async({page})=>{
    const title= await page.title();
    expect(title).toBe("Google");
})

test('URL Check', async({page})=>{
    const url= await page.url();
    expect(url).toBe("https://www.google.com/");
})