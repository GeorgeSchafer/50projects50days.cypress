import { expect } from 'chai'


const url = "https://50projects50days.com/projects/expanding-cards/";

describe("Expanding Cards page", () => {
	beforeEach(() => {
        cy.visit(url);
		cy.url()
            .should("include", "/projects/expanding-cards/");
	});

	it("Container loads", () => {
		cy.get(".container");
	});

	it("Panels", () => {
		cy
            .get(".panel")
            .click({multiple:true});

        cy
            .get(".panel")
            .find('h3')
            .click({multiple:true});


	});
});
