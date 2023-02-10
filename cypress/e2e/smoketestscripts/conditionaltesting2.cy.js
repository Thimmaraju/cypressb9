describe('Verify Login Functionality', () => {


    beforeEach(function () {
        cy.visit(Cypress.env("qaUrl"))


    });


    after(function () {
        cy.log("all test execution completed")
    });

    it.only('conditional testing - if  ', () => {

        cy.login("Admin", "admin123")
        //Assertion
        cy.contains('Dashboard').should("be.visible")

        //Another assertion

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        cy.contains("PIM").click();
        cy.wait(3000)

        cy.get('body').then(($body) => {
            if ($body.find('div[class="oxd-table-cell oxd-padding-cell"]').length > 0) {
                cy.get('input[class="oxd-input oxd-input--active"]').last().type("0221")
             
            }
            else {
               cy.log("No table Data")
            }
        })
    })

    it.only('conditional testing - else  ', () => {
        cy.login("Admin", "admin123")
        //Assertion
        cy.contains('Dashboard').should("be.visible")
        cy.title().should('eq', 'OrangeHRM')

        //Another assertion

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        cy.contains("PIM").click();
        cy.wait(3000)

        cy.get('body').then(($body) => {
            if ($body.find('Raju').length > 0) {
                cy.get('input[class="oxd-input oxd-input--active"]').last().type("0221")
             
            }
            else {
               cy.log("No table Data")
            }
        })

    })

})