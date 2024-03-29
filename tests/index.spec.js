const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default; // 1
const BASEURL = 'https://www.morganwebdev.com';
test.describe('basic checks', () => { // 2
test('headline exists', async ({ page }) => {
  await page.goto(BASEURL);
  const title = page.locator('h1');
  await expect(title).toHaveCount(1);
  await expect(title).toHaveText('My name is Morgan and this is my website.');
});

test('16 icons and svgs are present', async ({ page }) => {
  await page.goto(BASEURL);
  const icons = page.locator('.icon');
  await expect(icons).toHaveCount(16);
  const svgs = page.locator('svg');
  await expect(svgs).toHaveCount(16);
});

test('github link works', async ({ page }) => {
  await page.goto(BASEURL);
  const github = page.locator("a[href='https://github.com/airbr']");
  await expect(github).toHaveCount(1);
  await github.click();
  const name = page.locator(".vcard-fullname");
  await expect(name).toHaveCount(1);
  await expect(name).toHaveText('Morgan Murrah');
}); 

test('dialog opens to show text', async ({ page }) => {
  await page.goto(BASEURL);
  await expect(page.locator("text=Repository for these SVG Icons")).not.toBeVisible();
  await expect(page.locator("text=Quotes & More")).toBeVisible();
  await page.locator('button:text("Quotes & More")').click();
  await expect(page.locator("text=Repository for these SVG Icons")).toBeVisible();
}); 
});
test.describe('accessibility', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto(BASEURL);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});