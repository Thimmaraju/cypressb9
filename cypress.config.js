const { defineConfig } = require("cypress");

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'cypressb9',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {

    "projectId": "d7tr4e",
    baseUrl: "https://opensource-demo.orangehrmlive.com",

    "defaultCommandTimeout": 20000,
    "viewportWidth": 1920,
    "viewportHeight" :1080,
    "retries":{ "runMode": 1, "openMode": 1 },
    "video":true,
    //"specPattern": "**/*.feature",

    "env":{
       
        "qaUrl" : "https://opensource-demo.orangehrmlive.com",
        "username" : "Admin",
        "password" : "admin123",
        "wrongpassword":"jhebwefhbwe"
    },
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
  
});