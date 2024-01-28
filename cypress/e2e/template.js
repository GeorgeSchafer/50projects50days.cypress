/// <reference types="Cypress" />

describe("Expanding Cards", () => {
	before(() => {
        cy.visit('');
	});

    it("Values", () => {
        cy.url()
        .should("include", "/path/");
    })


});
