const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default; // 1

test('one big test for a small page', async ({ page }) => {

    await page.goto('https://www.morganwebdev.com');

    const title = page.locator('h1');
    await expect(title).toHaveCount(1);
    await expect(title).toHaveText('My name is Morgan and this is my website.');

    const icons = page.locator('.icon');
    await expect(icons).toHaveCount(16);
    const svgs = page.locator('svg');
    await expect(svgs).toHaveCount(16);

    await expect(page.locator("text=Repository for these SVG Icons")).not.toBeVisible();
    await expect(page.locator("text=Quotes & More")).toBeVisible();
    await page.locator('button:text("Quotes & More")').click();
    await expect(page.locator("text=Repository for these SVG Icons")).toBeVisible();

    const locator = page.locator('css=.screen')
    await expect(locator).toHaveCSS('background-color', 'rgb(42, 34, 40)');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4
    expect(accessibilityScanResults.violations).toEqual([]); // 5

});





