const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default; // 1

test('headline exists', async ({ page }) => {
  await page.goto('https://www.morganwebdev.com');
  const title = page.locator('#mobile-query > div.screen > div.h-card > p:nth-child(2)');
  await expect(title).toHaveCount(1);
  await expect(title).toHaveText('My name is Morgan and this is my website.');
});

test('16 icons and svgs are present', async ({ page }) => {
  await page.goto('https://www.morganwebdev.com');
  const icons = page.locator('.icon');
  await expect(icons).toHaveCount(16);
  const svgs = page.locator('svg');
  await expect(svgs).toHaveCount(16);
});

test('github link works', async ({ page }) => {
  await page.goto('https://www.morganwebdev.com');
  const github = page.locator("a[href='https://github.com/airbr']");
  await expect(github).toHaveCount(1);
  await github.click();
  const name = page.locator(".vcard-fullname");
  await expect(name).toHaveCount(1);
  await expect(name).toHaveText('Morgan Murrah');
}); 

// test.describe('homepage', () => { // 2
//   test('should not have any automatically detectable accessibility issues', async ({ page }) => {
//     await page.goto('https://www.morganwebdev.com'); // 3

//     const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

//     expect(accessibilityScanResults.violations).toEqual([]); // 5
//   });
// });