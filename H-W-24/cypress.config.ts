import { defineConfig } from "cypress";
const { allureCypress } = require("allure-cypress/reporter");
export default defineConfig({
  e2e: {
    supportFile: "./H-W-24/cypress/support/e2e.ts",
    specPattern: "./H-W-24/cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: 15000,
    video: true,
    downloadsFolder: "./H-W-24/cypress/downloads",
    screenshotsFolder: "./H-W-24/cypress/screenshots",
    fixturesFolder: "./H-W-24/cypress/fixtures",
    screenshotOnRunFailure: true,
    videosFolder: "./H-W-24/cypress/videos",
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "./cypress/reports/allure-results",
      });
      return config;
    },
  },
});
