// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : undefined,
  use: {
    trace: 'on',
  },
// https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json
  projects: [
    {
        "name": "Pixel 5",
        "use": {
            "userAgent": "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.11 Mobile Safari/537.36",
            "screen": {
                "width": 393,
                "height": 851
            },
            "viewport": {
                "width": 393,
                "height": 727
            },
            "deviceScaleFactor": 2.75,
            "isMobile": true,
            "hasTouch": true,
            "defaultBrowserType": "chromium"
        }
    },
    {
        "name": "iPhone X",
        "use": {
            "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/17.0 Mobile/15A372 Safari/604.1",
            "viewport": {
                "width": 375,
                "height": 812
            },
            "deviceScaleFactor": 3,
            "isMobile": true,
            "hasTouch": true,
            "defaultBrowserType": "webkit"
        }
    },
    {
        "name": "Moto G4",
        "use": {
            "userAgent": "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.11 Mobile Safari/537.36",
            "viewport": {
                "width": 360,
                "height": 640
            },
            "deviceScaleFactor": 3,
            "isMobile": true,
            "hasTouch": true,
            "defaultBrowserType": "chromium"
        }
    },
    {
        "name": "Moto G4 landscape",
        "use": {
            "userAgent": "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.11 Mobile Safari/537.36",
            "viewport": {
                "width": 640,
                "height": 360
            },
            "deviceScaleFactor": 3,
            "isMobile": true,
            "hasTouch": true,
            "defaultBrowserType": "chromium"
        }
    },
    {
        "name": "iPad Pro 11",
        "use": {
            "userAgent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
            "viewport": {
                "width": 834,
                "height": 1194
            },
            "deviceScaleFactor": 2,
            "isMobile": true,
            "hasTouch": true,
            "defaultBrowserType": "webkit"
        }
    },
    {
        "name": "iPad Pro 11 landscape",
        "use": {
            "userAgent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
            "viewport": {
                "width": 1194,
                "height": 834
            },
            "deviceScaleFactor": 2,
            "isMobile": true,
            "hasTouch": true,
            "defaultBrowserType": "webkit"
        }
    },
      {
          "name": "Desktop Safari",
          "use": {
              "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
              "screen": {
                  "width": 1792,
                  "height": 1120
              },
              "viewport": {
                  "width": 1280,
                  "height": 720
              },
              "deviceScaleFactor": 2,
              "isMobile": false,
              "hasTouch": false,
              "defaultBrowserType": "webkit"
          }
      },
      {
          "name": "Desktop Chrome",
          "use": {
              "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.11 Safari/537.36",
              "screen": {
                  "width": 1920,
                  "height": 1080
              },
              "viewport": {
                  "width": 1280,
                  "height": 720
              },
              "deviceScaleFactor": 1,
              "isMobile": false,
              "hasTouch": false,
              "defaultBrowserType": "chromium"
          }
      },
      {
          "name": "Desktop Edge",
          "use": {
              "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.11 Safari/537.36 Edg/118.0.5993.11",
              "screen": {
                  "width": 1920,
                  "height": 1080
              },
              "viewport": {
                  "width": 1280,
                  "height": 720
              },
              "deviceScaleFactor": 1,
              "isMobile": false,
              "hasTouch": false,
              "defaultBrowserType": "chromium"
          }
      },
      {
          "name": "Desktop Firefox",
          "use": {
              "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:117.0) Gecko/20100101 Firefox/117.0",
              "screen": {
                  "width": 1920,
                  "height": 1080
              },
              "viewport": {
                  "width": 1280,
                  "height": 720
              },
              "deviceScaleFactor": 1,
              "isMobile": false,
              "hasTouch": false,
              "defaultBrowserType": "firefox"
          }
      }  
  ]
};

module.exports = config;