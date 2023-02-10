import data from "../../fixtures/Login/logincreds.json"

//import Loginpage from '../../pageobjects/loginpage.po'

import DashboardPage from '../../pageobjects/dashboard/dashboardpage.po'

//const login = new Loginpage()
const  dash = new DashboardPage()

describe('Verify Login Functionality', () => {
  

  let endpoint = "/web/index.php/auth/login"

  beforeEach(function () {
    cy.visit(endpoint)
  
  });

  
  after(function () {
    cy.log("all test execution completed")
  });

  it('Verify Login with Valid creds', () => {



      //Actions 
     //login.loginwithcreds(data.username, data.password)

     cy.login(data.username,data.password)

      //Assertion
      cy.contains("Time at Work").should("be.visible")

      //Another assertion

      cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

  })

  specify('Verify Login with Invalid creds', () => {



    //Actions 
    login.loginwithcreds(data.username, data.wrongpassword)

    // //Assetions

     cy.contains(login.errorMessage()).should("be.visible")


  })

  it('Verify Login with Invalid username', () => {

   cy.viewport("ipad-2", "landscape")
    //Actions 
    login.loginwithcreds(data.wrongusername, data.password)
    //Assetions

    cy.contains(login.errorMessage()).should("be.visible")

  })


})