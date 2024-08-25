import { test, expect } from '@playwright/test';

test('Scrut_Login CodeGen', async ({ page }) => {
  test.setTimeout(100000);
  await page.goto('https://app.scrut.io/login');
  
  await page.getByPlaceholder('Type here').fill("qasecured@scrut.io");
  await page.getByRole('button',{name:'Continue'}).click();
  await page.getByRole('button',{name :'Request Verification Code'}).click();
  await page.getByLabel('Please enter one time password character 1').click();
  await page.getByLabel('Please enter one time password character 1').fill("695124");
  await page.getByRole('button',{name:'Verify'}).click();
  await page.getByRole('button',{name:"Got It!"}).click();
  await page.waitForTimeout(65000);
});