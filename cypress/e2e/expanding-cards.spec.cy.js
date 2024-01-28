/// <reference types="Cypress" />

describe("Expanding Cards page", () => {
	before(() => {
        cy.visit('/expanding-cards');
	});

    it("Correct URL", () => {
        const panelText = [
            'Explore The World',
            'Wild Forest',
            'Sunny Beach',
            'City on Winter',
            'Mountains - Clouds'
        ];
        let i = -1;

		cy.url()
            .should("include", "/expanding-cards/");


		cy.get(".container")
            .find('.panel')
            .find('h3')
            .each( h3 => {
                i++;
                cy.wrap(h3)
                    .should('contain', panelText[i])
            });

        
        // panelText.forEach( str => {})
    })


});
