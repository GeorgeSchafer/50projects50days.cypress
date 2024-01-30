/// <reference types="Cypress" />

describe("Password Generator", () => {
    let counter = 0
    const url = '/password-generator/'

    beforeEach(() => {
        cy.visit(url);
    });

    it(`Test ${counter}: URL Verificatigit on`, () => {
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
