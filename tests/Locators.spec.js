const {test, expect} = require('@playwright/test');
const { waitForDebugger } = require('inspector');

test('Working with Locaotrs', async({page}) => {

await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

//located element using xpath
await page.locator('//*[@id="login1"]').fill("satishgangwani19");
//located element using CSS
await page.locator('#password').fill('sati1234');
//located element using getByRole()

await page.waitForTimeout(3000);

await page.getByRole('button', {type:'submit'}).click();

await page.waitForTimeout(3000);

});