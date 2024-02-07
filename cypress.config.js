const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "tebxdw",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Cypress project',
      reportPageTitle: 'Cypress project'},
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    video: true, 
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
