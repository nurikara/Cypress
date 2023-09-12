const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'u2nbt1',  
 

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://www.amazon.com",
     
    projectId: "1jto35",
  "video": false ,
  
 // 'retries':2 

},
});
