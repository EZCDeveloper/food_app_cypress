export default {
  viewportWidth: 1600,
  viewportHeight: 900,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,tsx,ts}',
  },
};
