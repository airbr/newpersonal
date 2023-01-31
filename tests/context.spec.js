// const { test, expect } = require('@playwright/test');
// const { firefox } = require('@playwright/test');  // Or 'chromium' or 'webkit'.

// test('screenshot example', async () => {

//       const browser = await firefox.launch();
//       const page = await browser.newPage();

//       const context = await browser.newContext({
//         locale: 'de-DE',
//         timezoneId: 'Europe/Berlin',
//       });
//      // Go to https://www.google.com/?gws_rd=ssl
//       await page.goto('https://www.google.com/?gws_rd=ssl');

//       // Click [aria-label="Search"]
//       await page.locator('[aria-label="Search"]').click();

//       // Fill [aria-label="Search"]
//       await page.locator('[aria-label="Search"]').fill('morgan murrah');
//       // Press Enter
//       await Promise.all([
//         page.waitForNavigation(),
//         page.locator('[aria-label="Search"]').press('Enter')
//       ]);

//       await expect(page.locator('text=Morgan Murrah - Software Developer')).toHaveCount(1)
//       await page.screenshot({ path: 'screenshot.png' });
//       await browser.close();

// });
