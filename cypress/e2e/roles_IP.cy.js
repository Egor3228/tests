describe('Cypress Test',() => {
  it ('succesful add role',() => {
    cy.fixture('login').then(data => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(data.main_url)

        cy.log('Ввод существующего логина')
        cy.get('.form-input--text')
            .type(data.login)
            
        cy.log('Ввод password')
        cy.get('.form-input--password')
            .type(data.passw)

          cy.wait(1000)
        cy.log('Клик по кнопке "Войти')
        cy.get('.form__buttons > :nth-child(3)')
            .click()

        cy.get('.page-nav__role-block > .button')
            .click()

        cy.get('.select-role-form > :nth-child(2)')
            .click()

        cy.get('.variants-company > :nth-child(2)')
          .click()

        cy.get(':nth-child(1) > .form-control--medium > .form-input--text')
          .type(data.role_name)

        cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
          .type(data.role_address)

        cy.get('.form-area')
          .type(data.role_comment)

        cy.get('.create-company-form__description-block > .button')
          .click()

        cy.get(':nth-child(3) > .menu-item__item-name')
          .click()

        cy.get('.shared-list-item')
          .should('exist')
    })
  })
})
