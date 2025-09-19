const {test, expect} = require('@playwright/test');

test('Handling Web Link', async({page}) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');

    var webLink = page.getByTitle('Rediff Login');

    expect(webLink).toBeVisible;
    expect(webLink).toBeEnabled;

    var textValue = await webLink.innerText();
    console.log(textValue);

    var hrefValue = webLink.getAttribute('href');
    console.log(hrefValue);

    await webLink.click();

    await page.waitForTimeout(3000);

});