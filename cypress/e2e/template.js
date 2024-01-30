/// <reference types="Cypress" />

describe("Template Name", () => {
    before(() => {
        cy.visit('/');
    });

    it("Elements and Text", () => {
        cy.url()
        .should("include", "/");
    })


});
