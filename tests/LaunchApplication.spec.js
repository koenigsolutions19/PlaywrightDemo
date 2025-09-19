const {test, expect} = require('@playwright/test')

test('Launch Application', async({page}) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');

    var title1 = await page.title();

    console.log(title1);
});