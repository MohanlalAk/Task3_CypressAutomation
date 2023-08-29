/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
//------------------------------//*/

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000, // Set the default command timeout to 6000ms
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


