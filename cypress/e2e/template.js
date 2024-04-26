/// <reference types="Cypress" />

describe("", () => {
    let counter = 0
    const url = 'URL'

    beforeEach(() => {
        cy.visit(url)
    });

    it(`Test ${counter}: URL Verification`, () => {
        cy.url()
        .should('include', url)
    })
    counter++

    it(`Test ${counter}: Elements onload`, () => {
    })
    counter++

    it(`Test ${counter}: Elements after actions`, () => {
    })
    counter++


});
