describe('Add Student Marks', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/StagSms/addmark.html')

     cy.get('#srno').type('1')
      cy.get('#StudentID').type('401')
      cy.get('#CourseID').type('computer')
      cy.get('#Semester').type('1')
      cy.get('#Submark1').type('40')
      cy.get('#Submark2').type('50')
      cy.get('#Submark3').type('30')
    
      cy.get('[onclick="Addingmarks()"]').click()
    })
})