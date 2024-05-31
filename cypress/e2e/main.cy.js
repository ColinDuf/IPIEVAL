/// <reference types="cypress" />

describe('first test', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html')
    })

    it('displays Jgnnq for Hello with key = 2', () => {
        cy.dataCy('cipher-key').type('2').should('have.value', '2')
        cy.get('#cipher-msg').type('Hello').should('have.value', 'Hello')
        cy.get('#btn-cipher').click()

        cy.get('#result').should('have.text', 'Jgnnq')
    })
})
