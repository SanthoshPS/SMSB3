describe('VIEW STUDENT', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/StagSms/Viewstudent.html')
     cy.get('#Student_ID').type('401')
     cy.get('[onclick="getStudent()"]').click()
    })
  })