import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import Loginpage  from "../../pageobjects/loginpage.po";

const login = new Loginpage()


Given('User lauch the Application', () => {
    cy.visit("/")
  })


  When(`User enter username {string} and Password {string}`, (username, password) => {

    cy.xpath(login.usernameInput()).type(username)
    cy.xpath(login.passwordInput()).type(password)

  })

  When('User click on the Login Button', () => {
    cy.xpath(login.submitBtn()).click()
  })
  
Then('User should be navigated to dashboard', () => {
    cy.contains("Time at Work").should("be.visible")
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  })

  When(`User enter Invalid username {string} and Invalid Password {string}`, (username, password) => {

    cy.xpath(login.usernameInput()).type(username)
    cy.xpath(login.passwordInput()).type(password)

  })

  Then('User should get error message', () => {
    cy.contains(login.errorMessage()).should("be.visible")
  })