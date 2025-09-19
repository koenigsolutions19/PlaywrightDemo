const {test, expect} = require('@playwright/test');

test('Handling Edit box', async({page}) => {
await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');

var editBox = page.getByPlaceholder('Enter your full name')

await expect(editBox).toBeVisible;
await expect(editBox).toBeEmpty;
await expect(editBox).toBeEditable;
await expect(editBox).toBeEnabled;

await page.waitForTimeout(3000);
await editBox.fill('Satish')
await page.waitForTimeout(3000);

await editBox.clear();

await page.waitForTimeout(3000);

});