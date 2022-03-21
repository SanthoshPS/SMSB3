describe('UPDATE STUDENT', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/StagSms/updateStudent.html')

     cy.get('#StudentID').type('606')

      cy.get('#PhoneNo').type('8888888888')
      cy.get('#Email').type('paras@gmail.com')

      cy.get('#Studentstatus').type('Active')
    

     cy.get('[onclick="updateStudent()"]').click()
    })
  })
