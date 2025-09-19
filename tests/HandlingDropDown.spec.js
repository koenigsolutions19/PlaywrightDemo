const {test, expect} = require('@playwright/test');
const path = require('path');

test('Handling Drop DOwn', async({page}) => {

await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

var allElement = await page.$$('#country option');
console.log(allElement.length);

await expect(allElement.length).toBe(248);

for(var childEelement of allElement)
{
    var textValueOfElement = await childEelement.textContent();
    console.log(textValueOfElement);

    var flag = false;

    if(textValueOfElement.includes("Australia"))
    {
        var flag = true;
        break;
    }
}
console.log(flag);
expect(flag).toBeTruthy();
await page.waitForTimeout(2000);







/*
var dropDownvalues = await page.locator('#country option');
await expect(dropDownvalues).toHaveCount(248)

var elementsString = await page.locator("#country").textContent();
console.log(expect(elementsString.includes("India")).toBeTruthy());
//console.log(dropDownvalues);
await page.waitForTimeout(2000);
*/
/*
var dropDown = await page.locator('#country');
//select element using label
await dropDown.selectOption({label:'Belgium'});
await page.waitForTimeout(2000);

//select element using Visible Text
await dropDown.selectOption('Australia');
await page.waitForTimeout(2000);

//Select value using 'value' attribute
await dropDown.selectOption({value:'24'});
await page.waitForTimeout(2000);

//Select value using index attribute
await dropDown.selectOption({index:3});
await page.waitForTimeout(2000);
*/

});