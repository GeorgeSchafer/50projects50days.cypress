/// <reference types="Cypress" />

describe('Form-Wave', () => {
	beforeEach(() => {
		cy.visit('/form-wave')
		cy.url().should('include', '/form-wave/')
	})

	it('Happy Path', () => {

        // @h1
        cy.get('.container').find('h1').as('h1')
        // @form
        cy.get('.container').find('form').as('form')
        // @username
        cy.get('[type="text"]').as('username')
        // @password
        cy.get('[type="password"]').as('password')
        // @button
        cy.get('button').as('button')
        // @p
        cy.get('p').as('p')
        
        cy.get('@h1').should('contain', 'Please Login')
        cy.get('@form').find('.form-control').then( jqdiv => {
            cy.wrap(jqdiv).find('input').should('have.attr','required')
        })
        
        cy.get('@button').should('contain', 'Login')
        cy.get('@button').should('have.class', 'btn')

        cy.get('@p').should('have.class', 'text')
        cy.get('@p').should('contain', "Don't have an account? ")
        cy.get('@p').find('a').should('contain', 'Register')
        cy.get('@p').find('a').should('have.attr', 'href', '#')

        cy.get('@username').type('user@republic.com')
        cy.get('@password').type('pickastrongerpassword')
        cy.get('@h1').click()

        cy.get('@username').should('not.have.attr', 'border', 'red')
        cy.get('@password').should('not.have.attr', 'border', 'red')

        cy.get('@button').click()
    })

    it('Sad Path', () => {
        // @username
        cy.get('[type="text"]').as('username')
        // @password
        cy.get('[type="password"]').as('password')
        // @button
        cy.get('button').as('button')

        cy.get('@username').type('   ')
        cy.get('@password').type('111')
        cy.get('body').click()

        cy.get('@username').should('have.attr', 'border', '1px red')
        cy.get('@password').should('have.attr', 'border', '1px red')
    })
})
