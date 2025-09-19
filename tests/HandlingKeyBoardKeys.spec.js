const {test, expect} = require('@playwright/test');

test('Handling Keys', async({page}) => {

await page.goto("https://gotranscript.com/text-compare");
await page.locator('[name="text1"]').fill("Playwright Tool");   
await page.waitForTimeout(2000);

//ctrl+A
await page.keyboard.press('Control+A');
await page.waitForTimeout(2000);

//ctrl+C
await page.keyboard.press('Control+C');
await page.waitForTimeout(2000);

//tab
await page.keyboard.down('Tab');
await page.keyboard.up('Tab');
await page.waitForTimeout(2000);

//ctrl+v
await page.keyboard.press('Control+V');
await page.waitForTimeout(2000);
});