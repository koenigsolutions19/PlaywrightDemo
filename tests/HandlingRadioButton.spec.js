const {test, expect} = require('@playwright/test');
const path = require('path');

test('Handling Radio Button', async({page}) => {

await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

var radioButton = await page.locator('[value="f"]');

let status = await radioButton.isChecked();
console.log(status);
await page.waitForTimeout(2000);

await expect(radioButton).toBeVisible();
await expect(radioButton).toBeEnabled();

await radioButton.check();

status = await radioButton.isChecked();
console.log(status);

await page.waitForTimeout(2000);
});