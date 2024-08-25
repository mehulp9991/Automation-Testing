const {test,expect}=require('@playwright/test')

// test.skip('Upload',async({page})=> {
// await page.goto('https://www.west-wind.com/wconnect/wcscripts/FileUpload.wwd');
// await page.locator('//input[@id="upload"]').setInputFiles(['C:/Users/TRACK/Downloads/IMG20240119154914.jpg','C:/Users/TRACK/Downloads/IMG20240119143216.jpg']);
// await page.waitForTimeout(10000);
// })

test('Upload Files',async({page})=> {
    await page.goto('https://www.west-wind.com/wconnect/wcscripts/FileUpload.wwd');
    await page.locator('//input[@id="upload"]').setInputFiles({

    name : 'dee.txt',
    mimeType : 'text/plain',
    buffer : Buffer.from('This is a test')
    }
    )
    await page.waitForTimeout(10000);
    })