/// <reference types="cypress" />

describe('Testing open app', () => {
  context('Web app', () => {
      it('Should visit home', () => {
        cy.visit('http://localhost:4200');
      });

      it('Get the title', () => {
        cy.title().should('include', 'My Custom Input')
      })

      it('The input should be empty', () => {
        cy.get('#search-text').should('have.text', '')
      });

      it('Should display the country list', () => {
        cy.wait(2000)
        cy.get('#search-text').type('a').should('have.value', 'a')
      });

      it('Should get the first element of the selector', () => {
        cy.get('#country-list > :nth-child(1) > a').should('have.text', 'Afghanistan')
      });
  })
})
