const {test, expect} = require('@playwright/test')

test('Launch Application', async({page}) => {

await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
var title1 = await page.title();
await page.locator("//input[starts-with(@name, 'name')]").fill("Satish");
await page.waitForTimeout(3000);
console.log(title1);
});