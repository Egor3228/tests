describe('Cypress Test',() => {
  it ('exist login signup test',() => {
      cy.fixture('registration').then(data => {
          cy.log('Переxод на страницу регистрации')
          cy.visit(data.main_url)

          cy.log('Ввод существующего логина')
          cy.get('input[autocomplete="username"]')
              .type(data.login)

              
          cy.log('Ввод существующего mail')
          cy.get('input[class="form-input--email form-input"]')
              .type(data.email)

          cy.log('Ввод password')
          cy.get('div[class="registration-form__label"]:nth-child(3)').find('input[autocomplete="new-password"]')
              .type(data.password)

          cy.log('Ввод password')
          cy.get('div[class="registration-form__label"]:nth-child(4)').find('input[autocomplete="new-password"]')
              .type(data.password)

              .wait(2000)
          cy.log('Клик по кнопке "Войти')
          cy.get('.form__buttons > :nth-child(4)')
              .click()
              
          cy.log('Ошибка')
          cy.get('.form-error > span')
              .should('exist')
      });
  });
});