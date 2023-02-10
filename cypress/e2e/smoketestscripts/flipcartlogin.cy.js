describe('Validate Login Functionality', () => {

    it('Validate login with Valid Credentials', () => {

        Cypress.on("uncaught:exception", (err, runnable) => {
  
            return false;
          });
        

      cy.visit('https://www.flipkart.com/')

      cy.xpath('//a[@class="_1_3w1N"]').click()
    
      cy.get("input[class='_2IX_2- VJZDxU']").type("7207774066")
      // cy.get('input[type="password"]').type("Rkfjnkjfn")
      // cy.get('button[type="submit"]').last().click()
      // cy.contains("Thimmaraju").should("be.visible")

    })

    it('Validate login with invalid Credentials', () => {

        Cypress.on("uncaught:exception", (err, runnable) => {
  
            return false;
          });
        

      cy.visit('https://www.flipkart.com/')

      cy.contains('Login').click()
      cy.get('input[class="_2IX_2- VJZDxU"]').type("7207774066")
      // cy.get('input[type="password"]').type("bjbfj@2dnqwuhdqhwdiu673")
      // cy.get('button[type="submit"]').last().click()
      // cy.contains("Your username or password is incorrect").should('be.visible')

    })

    it('Validate Search ', () => {

        Cypress.on("uncaught:exception", () => {
  
            return false;
          });
        

      cy.visit('https://www.flipkart.com/')

      cy.get('input[name="q"]').type("Iphone")

      cy.contains("iphone 13").click();


    })

})


//  .each

///if()

