const {test, expect} = require('@playwright/test');

test('Handling Keys', async({page}) => {

await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");
await page.locator("#login1").fill('satishgangwani19');
await page.waitForTimeout(2000);
var keyb = page.keyboard;

//select the data (Ctrl+A)
await keyb.press("Control+A");
await page.waitForTimeout(2000);

/*
//Copy the data (Ctrl + C)
await page.keyboard.press("Control+C");
await page.waitForTimeout(2000);

//Move to the other element using TAB key
await page.keyboard.down("Tab");
await page.keyboard.up("Tab");
await page.waitForTimeout(2000);

//Paste the data (Ctrl + V)
await page.keyboard.press("Control+V");
await page.waitForTimeout(3000);
*/
});