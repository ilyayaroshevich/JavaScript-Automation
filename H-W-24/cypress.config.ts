import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '39u51i',
  e2e: {
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: 15000,
    video: true,
    downloadsFolder: "cypress/downloads",
    screenshotsFolder: "cypress/screenshots",
    fixturesFolder: "cypress/fixtures",
    screenshotOnRunFailure: true,
    videosFolder: "cypress/videos",
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
