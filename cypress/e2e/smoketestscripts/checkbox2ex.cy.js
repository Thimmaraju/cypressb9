

describe('Checkboxes', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  
    it('checks all checkboxes with one command', () => {

      //cy.xpath("//input[@type='checkbox']").should("have.length", 7)
      // cy.get('#tecnologia1').check().should("be.checked")
      // cy.get('#tecnologia2').check().should("be.checked")
      cy.get("input[type='checkbox']").check(["HTML", "PHP", "C#"]).should("be.checked")

      cy.wait(5000)

      cy.get('#check input[type="checkbox"]').uncheck().should("not.be.checked")
        
    })
  })
