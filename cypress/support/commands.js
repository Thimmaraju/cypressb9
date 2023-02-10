// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

require('cypress-downloadfile/lib/downloadFileCommand')

require('@4tw/cypress-drag-drop')

Cypress.Commands.add('login', (username, password) => { 
    
     cy.xpath('//input[@name="username"]').type(username)

      cy.xpath('//input[@name="password"]').type(password)
      cy.xpath('//button[@type="submit"]').click();
 })


 
Cypress.Commands.add('AddEmployee', (firstname, lastname) => { 
    
    cy.get('[placeholder="First Name"]').type(firstname)

     cy.get('[name="lastName"]').type(lastname)
     cy.get('[type="submit"]').click();
})