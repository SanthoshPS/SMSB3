describe('SemesterWise Student Marks', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/StagSms/semesterwise.html')

    //  cy.get('#srno').type('1')
    //   cy.get('#StudentID').type('401')
    //   cy.get('#CourseID').type('computer')
      cy.get('#Semester').type('1')
   
    
      cy.get('[onclick="viewsemestermarks()"]').click()
    })
})