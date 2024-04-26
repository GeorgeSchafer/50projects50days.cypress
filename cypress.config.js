const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: './pages',
    // baseUrl: 'https://50projects50days.com/projects',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
