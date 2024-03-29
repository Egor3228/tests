describe('Cypress Test',() => {
  it ('unsuccesful add role(wrong_coledge)',() => {
    cy.fixture('login').then(data => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(data.main_url)

        cy.log('Ввод существующего логина')
        cy.get('.form-input--text')
            .type(data.login)
            
        cy.log('Ввод password')
        cy.get('.form-input--password')
            .type(data.passw)
            cy.wait(2000)
         
        cy.log('Клик по кнопке "Войти')
        cy.get('.form__buttons > :nth-child(3)')
            .click()

        cy.get('.message-student > .button')
            .click()

        cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
          .type(data.colledge)

        cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
          .type(data.text)

        cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(2)')
          .click()

        cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
          .type(data.from_year)

        cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
          .type(data.to_year)

        cy.get('.desktop-modal__content > .student-form > .button')
          .should('be.disabled')
    })
  })
})
