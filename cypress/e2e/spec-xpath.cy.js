// Adiciona suporte ao cypress-xpath
require('cypress-xpath');

describe('Automation Exercise - Casos 1 à 5 (XPath)', () => {
    it('Test Case 1: Register User', () => {
      let randomUserComplement = new Date().getTime()
  
      cy.visit('https://automationexercise.com')
      cy.xpath("//a[contains(text(),'Signup / Login')]").click()
  
      cy.xpath("//h2[contains(text(),'New User Signup!')]").should('be.visible')
      cy.xpath("//input[@data-qa='signup-name']").type(`Cypress_${randomUserComplement}`)
      cy.xpath("//input[@data-qa='signup-email']").type(`cypress${randomUserComplement}@test.com`)
      cy.xpath("//button[contains(text(),'Signup')]").click()
  
      cy.xpath("//b[contains(text(), 'Enter Account Information')]").should('be.visible')
      cy.xpath("//input[@value='Mr']").check()
      cy.xpath("//input[@data-qa='password']").type('123456')
      cy.xpath("//input[@data-qa='first_name']").type('angela')
      cy.xpath("//input[@data-qa='last_name']").type('angela')
      cy.xpath("//input[@data-qa='address']").type('Rua x nº y')
      cy.xpath("//select[@data-qa='country']").select('Canada')
      cy.xpath("//input[@data-qa='state']").type('Goias')
      cy.xpath("//input[@data-qa='city']").type('Goiania')
      cy.xpath("//input[@data-qa='zipcode']").type('12345')
      cy.xpath("//input[@data-qa='mobile_number']").type('99999999999')
      cy.xpath("//button[contains(text(),'Create Account')]").click()
    })

    it('Test Case 2: Login User', () => {
      cy.visit('https://automationexercise.com')
      cy.xpath("//a[contains(text(),'Signup / Login')]").click()
  
      cy.xpath("//h2[contains(text(),'Login to your account')]").should('be.visible')
      cy.xpath("//input[@data-qa='login-email']").type(`angteste@gmail`)
      cy.xpath("//input[@data-qa='login-password']").type(`123456`)
      cy.xpath("//button[contains(text(),'Login')]").click()
      cy.xpath("//a[contains(., 'Logged in as angteste')]").should('be.visible')
    })

    it('Test Case 3: Login Incorreto', () => {
      cy.visit('https://automationexercise.com')
      cy.xpath("//a[contains(text(),'Signup / Login')]").click()
  
      cy.xpath("//h2[contains(text(),'Login to your account')]").should('be.visible')
      cy.xpath("//input[@data-qa='login-email']").type(`angteste@gmail.com`)
      cy.xpath("//input[@data-qa='login-password']").type(`123456`)
      cy.xpath("//button[contains(text(),'Login')]").click()
      cy.xpath("//*[contains(text(),'Your email or password is incorrect!')]").should('be.visible')
    })

    it('Test Case 4: Logout', () => {
      cy.visit('https://automationexercise.com')
      cy.xpath("//a[contains(text(),'Signup / Login')]").click()
  
      cy.xpath("//h2[contains(text(),'Login to your account')]").should('be.visible')
      cy.xpath("//input[@data-qa='login-email']").type(`angteste@gmail`)
      cy.xpath("//input[@data-qa='login-password']").type(`123456`)
      cy.xpath("//button[contains(text(),'Login')]").click()
      cy.xpath("//a[contains(., 'Logged in as angteste')]").should('be.visible')
      cy.xpath("//a[contains(text(),'Logout')]").click()
      cy.xpath("//a[contains(text(),'Signup / Login')]").should('be.visible')
    })

    it('Test Case 5: Register User exist', () => {      
      cy.visit('https://automationexercise.com')
      cy.xpath("//a[contains(text(),'Signup / Login')]").click()
  
      cy.xpath("//h2[contains(text(),'New User Signup!')]").should('be.visible')
      cy.xpath("//input[@data-qa='signup-name']").type(`angteste`)
      cy.xpath("//input[@data-qa='signup-email']").type(`angteste@gmail`)
      cy.xpath("//button[contains(text(),'Signup')]").click()
      cy.xpath("//*[contains(text(),'Email Address already exist!')]").should('be.visible')
    })
  })
