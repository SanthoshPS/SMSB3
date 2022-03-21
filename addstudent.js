describe('Add Student', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/StagSms/AddStudent.html')
      cy.contains("Add New Student")
     cy.get('#StudentID').type('401')
      cy.get('#fname').type('paras')
      cy.get('#lname').type('fane')
      cy.get('#Gender').type('M')
      cy.get('#DOB').type('2003-04-05')
      cy.get('#PhoneNo').type('8888888888')
      cy.get('#Email').type('paras@gmail.com')
      cy.get('#Address').type('padmapur')
      cy.get('#YOA').type('2022-02-10')
      cy.get('#Course').type('civil')
      cy.get('#Studentstatus').type('Active')
    

     cy.get('[onclick="AddingStudent()"]').click()
    })
  })
