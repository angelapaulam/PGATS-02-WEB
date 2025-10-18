/// <reference types="cypress" />

describe('drag and drop and windows', () => {
    it('Multiple windows', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')   
        cy.contains('Click Here').invoke('removeAttr', 'target').click()
        cy.go('back')
        cy.get('a[href="/windows/new"]').should('have.text', 'Click Here')
      })         
});

describe.only('Drag and Drop and Windows', () => {
    it('Multiple Windows', () => {
    });
  
    it.only('Drag and Drop', () => {
      cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
  
      const dataTransfer = new DataTransfer()
  
      cy.contains('A').trigger('dragstart', { dataTransfer })
      cy.contains('B').trigger('drop', { dataTransfer })
    });
  });