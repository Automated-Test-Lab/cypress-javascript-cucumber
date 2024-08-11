const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 35000,
    requestTimeout: 35000,
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    baseUrl: "https://www3.epa.gov/carbon-footprint-calculator/",
    specPattern: 'cypress/integration/**/*.{feature,features}',
    excludeSpecPattern: "*.js",
    supportFile: "cypress/support/e2e.js",
    allureResultsPath: "/allure-results",
    experimentalSessionAndOrigin: true,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    retries: {
      runMode: 1,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});