const {test, expect} = require('@playwright/test');

test('Handling Flaky Test', async({page}) => {
await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');

await page.waitForTimeout(3000);

var editBox = page.getByPlaceholder('Enter your full name')
await editBox.fill('Satish')
await page.waitForTimeout(3000);

expect(page).

});