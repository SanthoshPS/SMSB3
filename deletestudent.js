describe('DELETE STUDENT', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/StagSms/Deletestudent.html')
    //   cy.contains("Add New Student")
     cy.get('#StudentID').type('401')
    cy.get('[onclick="getStudent()"]').click()
     cy.get('[onclick="deleteStudent(); window.location.reload()"]').click()
    })
  })