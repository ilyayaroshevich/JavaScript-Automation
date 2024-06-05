import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: 10000,
    video: true,
    downloadsFolder: "./H-W_24/cypress/downloads",
    screenshotsFolder: "./H-W_24/cypress/screenshots",
    fixturesFolder: "./H-W_24/cypress/fixtures",
    screenshotOnRunFailure: true,
    videosFolder: "./H-W_24/cypress/videos",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
