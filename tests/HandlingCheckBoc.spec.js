const {test, expect} = require('@playwright/test');
const path = require('path');

test('Handling checkBox', async({page}) => {

    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

    var chechBox = await page.locator("[id='remember']");

    await expect(chechBox).toBeVisible;
    await expect(chechBox).toBeEnabled;
    await expect(chechBox).toBeEditable;

    var checkedStatus = await chechBox.isChecked();

    console.log(checkedStatus);

    await chechBox.uncheck();
    
    checkedStatus = await chechBox.isChecked();
    console.log(checkedStatus);

    await page.waitForTimeout(3000);

    await chechBox.check();
    await page.waitForTimeout(3000);



});