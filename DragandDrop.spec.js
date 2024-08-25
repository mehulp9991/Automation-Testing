//@ts-check

const {test, expect} = require ("@playwright/test")

test('Drag and Drop', async({page})=> {

    await page.goto('https://webflow.com/made-in-webflow/website/Drag-and-Drop-Tricks');

    const SourceElement = page.locator('/html/body/div[2]/section/div[1]/div[1]/div[3]/div/div/div[2]')
    const TargetElement = page.locator('/html/body/div[2]/section/div[1]/div[2]/div[2]/div')
     
    await SourceElement.dragTo(TargetElement);
    await page.waitForTimeout(10000);


})