///<reference types="cypress"/>


describe('Automation - File Upload Example - 2', function () {

    it('Cypress Test Case - Understanding upload file - 2', function () {
  
      cy.visit('https://the-internet.herokuapp.com/upload');

      cy.get('#file-upload').attachFile('Admin/Taj-Mahal.jpg');
      
    //  cy.fileupload('//*[@id="file-upload"]','module1/test.txt')
      cy.get('#file-submit').click();

      cy.get('#uploaded-files').contains('Taj-Mahal.jpg')
    
    })

  // Import 

    it('Cypress Test Case - Understanding Download file', function () {
  
        cy.downloadFile("https://upload.wikimedia.org/wikipedia/commons/1/1f/Rose-ringed_parakeet_%28Psittacula_krameri_borealis%29_male_Jaipur_2.jpg", "cypress/downloads" , "parrot.jpg" )
        cy.readFile('cypress/downloads/parrot.jpg').should('exist')
      
      })

      it.only('Cypress Test Case - Understanding Download file - PDF ', function () {
  
        cy.downloadFile("https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB-CTFL_Syllabus_2018_v3.1.1.pdf", "cypress/Raju" , "ISTQBsyllabus.pdf" )
        
        cy.wait(2000)
        cy.readFile('cypress/Raju/ISTQBsyllabus.pdf').should('exist')
      
      })

   // Export 

  })