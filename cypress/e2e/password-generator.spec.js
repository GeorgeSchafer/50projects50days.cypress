/// <reference types="Cypress" />

describe("Password Generator", () => {
    let counter = 0
    const url = '/password-generator/'

    beforeEach(() => {
        cy.visit(url);
    });

    it(`Test ${counter}: URL Verification`, () => {
        cy.url()
        .should('include', url)
    })
    counter++

    it(`Test ${counter}: Elements onload`, () => {
        const labels = [
            'Password Length',
            'Include uppercase letters',
            'Include lowercase letters',
            'Include numbers',
            'Include symbols'
        ]
        let i = 0

        // @h2
        cy.get('.container > h2')
        .should('contain', 'Password Generator')
        .as('h2')

        // @result
        cy.get('.result-container > #result')
        .as('result')

        // @clipboard
        cy.get('.result-container > button > i')
        .as('clipboard')

        cy.get('.settings')
        .find('.setting')
        .then( jqdiv => {
            cy.wrap(jqdiv)
            .find('label')
            .contains(labels[i])

            i++
        })

        cy.get('input[type="number"]#length')
        .should('have.attr', 'type', 'number')
        .should('have.attr', 'min', '4')
        .should('have.attr', 'max', '20')
        .should('have.attr', 'value', '20')

        cy.get('.settings')
        .find('input[type="checkbox"]')
        .then( jqcheckbox => {
            cy.wrap(jqcheckbox)
            .should('have.attr','type','checkbox')
            .should('have.attr','checked')
        })

        // @generate
        cy.get('.container > button#generate')
        .should('contain', 'Generate Password')
    })
    counter++

    it(`Test ${counter}: Elements after actions`, () => {
    })
    counter++
});
