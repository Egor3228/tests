describe('Cypress Test',() => {
  it ('notification test',() => {
    cy.fixture('login').then(data => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(data.main_url)

        cy.log('Ввод существующего логина')
        cy.get('.form-input--text')
            .type(data.StudentLogin)
            

        cy.log('Ввод пароля')
        cy.get('.form-input--password')
            .type(data.password)
            cy.wait(2000)

        cy.log('Клик по кнопке "Войти')
        cy.get('.form__buttons > :nth-child(3)')
            .click()

        cy.log('Просмотр уведомлений')
        cy.get('[href="/notification"] > .header__label')
            .click()
                
        cy.log('Проверка уведомлений')
        cy.get('.notification-list-item')
            .should('exist')
    });
  });
});