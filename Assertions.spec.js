import{test, expect} from '@playwright/test'

test('Assertions', async({page})=> {
    await page.goto('https://seleniumbase.io/demo_page')

    const checkbox = await page.locator('//input[@id="checkBox2"]');
    const url = await page.locator('//a[@id="myLink1"]')
    await expect.soft(url).toHaveAttribute('href','https://seleniumbase.com')

    await checkbox.check();
    await expect(checkbox).not.toBeChecked();

    const value = await page.locator('//h1[normalize-space()="Demo Page"]')
    await expect(value).toContainText("Demo")

    
    
})