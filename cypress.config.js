const { defineConfig } = require("cypress");


module.exports = defineConfig({
  chromeWebSecurity: false, 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://app-hom.cocobambu.com/delivery', //URL Padrão
    testIsolation: false

  },
});
