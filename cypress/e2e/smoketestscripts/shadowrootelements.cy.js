///<reference types="cypress"/>

describe('Automation - Working with Shadowroot elements', function () {

    it('Cypress Test Case - Shadow', function () {
  
      cy.visit('https://books-pwakit.appspot.com/');

     //cy.xpath("//input[@id='input']").type('Fiction');
 cy.get('book-app[apptitle="BOOKS"]').shadow()
                .find('app-header')
                .find('.toolbar-bottom')
                .find('book-input-decorator')
                .find('#input')
               .type("fiction").click()
               cy.url().should('contains',"/explore?q=Fiction")


     })

  })


  //Reports 

      