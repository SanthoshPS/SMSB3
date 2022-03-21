describe('CourseWise Student Marks', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/StagSms/coursewise.html')


      cy.get('#Semester').type('1')
      cy.get('#CourseID').type('computer')
   
    
      cy.get('[onclick="viewcoursemarks()"]').click()
    })
})