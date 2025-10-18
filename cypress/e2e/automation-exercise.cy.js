/// <reference types="cypress" />

describe('Automation exercise', () => {
    it('Cadastrar um usuário', () => {
        const timestamp = new Date().getTime()

        cy.visit('https://automationexercise.com/')

        cy.get('a[href="/login"]').click()

        cy.get('[data-qa="signup-name"]').type('QA Tester')
        cy.get('[data-qa="signup-email"]').type(`qa-tester-${timestamp}@test.com`)
        cy.contains('button', 'Signup').click()

        cy.get('input[type=radio]').check('Mrs')

        cy.get('input#password').type('12345', { log: false })

        cy.get('[data-qa=days]').select('20')
        cy.get('[data-qa=months]').select('September')
        cy.get('[data-qa=years]').select('1992')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('input#first_name').type('Bob')
        cy.get('input#last_name').type('Narciso Pipoca')
        cy.get('input#company').type('PGATS')
        cy.get('input#address1').type('Rua Teste, 123')
        cy.get('input#address2').type('Apto 1') 
        cy.get('select#country').select('Canada')
        cy.get('input#state').type('State Teste')
        cy.get('input#city').type('City Teste')
        cy.get('[data-qa="zipcode"]').type('90001')
        cy.get('[data-qa="mobile_number"]').type('111 222 333')

        cy.get('[data-qa="create-account"]').should('be.visible').click()

        cy.url().should('include', 'account_created')
        cy.contains('b', 'Account Created!').should('be.visible')
        cy.get('h2[data-qa="account-created"]').should('have.text', 'Account Created!')

    });

});
