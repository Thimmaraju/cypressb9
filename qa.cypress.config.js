const { defineConfig } = require("cypress");

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({


  e2e: {


    baseUrl: "https://www.google.com/",

    "defaultCommandTimeout": 20000,
    "viewportWidth": 1920,
    "viewportHeight" :1080,
    "retries":{ "runMode": 1, "openMode": 1 },
    "video":false,
    "video":false,

    "env":{
       
        "qaUrl" : "https://opensource-demo.orangehrmlive.com",
        "username" : "Admin",
        "password" : "admin123",
        "wrongpassword":"jhebwefhbwe"
    },
    
    setupNodeEvents(on, config) {

      on('task', {downloadFile})
    },
  },
  
});