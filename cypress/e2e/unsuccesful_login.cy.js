describe('Cypress Test',() => {
  it ('unsuccesful login test(login doesn`t exist)',() => {
    cy.fixture('login').then(data => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(data.main_url)

        cy.log('Ввод несуществующего логина')
        cy.get('.form-input--text')
            .type(data.nlogin)
            

        cy.log('Ввод password')
        cy.get('.form-input--password')
            .type(data.password)

          cy.wait(2000)
        cy.log('Клик по кнопке "Войти')
        cy.get('.form__buttons > :nth-child(3)')
            .click()

        cy.log('Ошибка')
        cy.get('.form-error > span')
            .should('exist')
    })
  })
})