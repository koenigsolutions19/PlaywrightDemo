const {test, expect} = require('@playwright/test');

test('Handling Frame', async({page}) => {

await page.goto('https://ui.vision/demo/webtest/frames/');

//located frame using object (url / name)
var frame1 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"});
await frame1.locator('[name="mytext1"]').fill("Karn");
await page.waitForTimeout(3000);

//located frame using FrameLocator
var frame2 = await page.frameLocator('[src="frame_2.html"]');
await frame2.locator('[name="mytext2"]').fill('Arjun');
await page.waitForTimeout(3000);

});