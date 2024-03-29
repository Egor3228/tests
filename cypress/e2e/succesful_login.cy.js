describe('Cypress Test',() => {
  it ('succesful login test',() => {
    cy.fixture('login').then(data => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(data.main_url)

        cy.log('Ввод существующего логина')
        cy.get('.form-input--text')
            .type(data.StudentLogin)
            
        cy.log('Ввод password')
        cy.get('.form-input--password')
            .type(data.password)

          cy.wait(2000)
        cy.log('Клик по кнопке "Войти')
        cy.get('.form__buttons > :nth-child(3)')
            .click()

        cy.get('.menu-item__name')
           .should('exist')
    })
  })
})