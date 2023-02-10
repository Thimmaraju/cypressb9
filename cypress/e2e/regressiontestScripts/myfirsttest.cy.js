describe('template spec', () => {


  it('Search in google', () => {

    cy.visit('https://www.google.com/')
    cy.screenshot()

    cy.get('input[name="q"]').type("USA{enter}")

    //asertions 

  })

  it('Selecte Telugu language', () => {

    cy.visit('https://www.google.com/')

    cy.contains("Kannada").click()

    //Assertions

  })

})