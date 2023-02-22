exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || process.env.USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY || process.env.ACCESS_KEY,
  
    updateJob: false,
    specs: [
      '../test/specs/**.spec.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'first_test',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://2d21bbf63c36309f5703dce5a7683d1580443b73',
      'browserstack.debug': true
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };