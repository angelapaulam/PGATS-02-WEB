/// <reference types="cypress" />

describe('Automation exercise', () => {
    it.only('Login de usuário com email e senha corretos', () => {
        cy.visit('https://automationexercise.com/')   
        cy.get('a[href="/login"]').click()

        //cy.get('[data-qa="login-email"]').type('qa

    });

});

