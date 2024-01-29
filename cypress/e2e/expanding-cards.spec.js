/// <reference types="Cypress" />

describe("Expanding Cards page", () => {
	beforeEach(() => {
        cy.visit('/expanding-cards')
	})

    it("Correct URL", () => {
        cy.url()
            .should("include", "/expanding-cards/")
    })

    it("Validate Elements and Text", () => {
        const panelText = [
            'Explore The World',
            'Wild Forest',
            'Sunny Beach',
            'City on Winter',
            'Mountains - Clouds'
        ]
        
        let i = 0

        cy.get(".container")
            .find('.panel')
            .find('h3')
            .each( h3 => {
                cy.wrap(h3)
                    .should('contain', panelText[i])
                i++
            })
    })
})
