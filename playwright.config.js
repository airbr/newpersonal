// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on',
  },
  projects: [
    {
      name: 'mobile iphone8',
      use: { ...devices['iPhone 8'] },
    },
    {
      name: 'mobile nexus',
      use: { ...devices['Nexus 10'] },
    },
    {
      name: 'mobile moto',
      use: { ...devices['Moto G4'] },
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },
  ],
};

module.exports = config;