describe('Automation Exercise - Casos 1 à 5 (CSS)', () => {
    it('Test Case 1: Register User', () => {
      let randomUserComplement = new Date().getTime()
  
      cy.visit('')
      cy.contains('a', 'Signup / Login').click()
  
      cy.contains('h2', 'New User Signup!').should('be.visible')
      cy.get('[data-qa=signup-name]').type(`Cypress_${randomUserComplement}`)
      cy.get('[data-qa=signup-email]').type(`cypress${randomUserComplement}@test.com`)
      cy.contains('button', 'Signup').click()
  
      cy.contains('.title', 'Enter Account Information').should('be.visible')
      cy.get('[data-qa=title] [value=Mr]').check()
      cy.get('[data-qa=password]').type('123456')
      cy.get('[data-qa=first_name]').type('angela')
      cy.get('[data-qa=last_name]').type('angela')
      cy.get('[data-qa=address]').type('Rua x nº y')
      cy.get('[data-qa=country]').select('Canada')
      cy.get('[data-qa=state]').type('Goias')
      cy.get('[data-qa=city]').type('Goiania')
      cy.get('[data-qa=zipcode]').type('12345')
      cy.get('[data-qa=mobile_number]').type('99999999999')
      cy.contains('button', 'Create Account').click()
  
    })

    it('Test Case 2: Login User', () => {
      cy.visit('')
      cy.contains('a', 'Signup / Login').click()
  
      cy.contains('h2', 'Login to your account').should('be.visible')
      cy.get('[data-qa=login-email]').type(`angteste@gmail`)
      cy.get('[data-qa=login-password]').type(`123456`)
      cy.contains('button', 'Login').click()
      cy.contains('Logged in as angteste').should('be.visible')
    })

    it('Test Case 3: Login Incorreto', () => {
      cy.visit('')
      cy.contains('a', 'Signup / Login').click()
  
      cy.contains('h2', 'Login to your account').should('be.visible')
      cy.get('[data-qa=login-email]').type(`angteste@gmail.com`)
      cy.get('[data-qa=login-password]').type(`123456`)
      cy.contains('button', 'Login').click()
      cy.contains('Your email or password is incorrect!').should('be.visible')
    })

    it('Test Case 4: Logout', () => {
      cy.visit('')
      cy.contains('a', 'Signup / Login').click()
  
      cy.contains('h2', 'Login to your account').should('be.visible')
      cy.get('[data-qa=login-email]').type(`angteste@gmail`)
      cy.get('[data-qa=login-password]').type(`123456`)
      cy.contains('button', 'Login').click()
      cy.contains('Logged in as angteste').should('be.visible')
      cy.contains('a', 'Logout').click()
      cy.contains('a', 'Signup / Login').should('be.visible')
    })

    it('Test Case 5: Register User exist', () => {      
      cy.visit('')
      cy.contains('a', 'Signup / Login').click()
  
      cy.contains('h2', 'New User Signup!').should('be.visible')
      cy.get('[data-qa=signup-name]').type(`angteste`)
      cy.get('[data-qa=signup-email]').type(`angteste@gmail`)
      cy.contains('button', 'Signup').click()
      cy.contains('Email Address already exist!').should('be.visible')
    })
  })
  
  
