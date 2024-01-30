/// <reference types='Cypress' />

describe('Expanding Cards page', () => {
    let counter = 0
    const url = '/expanding-cards/'

    beforeEach(() => {
        cy.visit(url)
    })

    it(`Test ${counter}: URL Verification`, () => {
        cy.url()
        .should('include', url)
    })
    counter++

    it(`Test ${counter}: Validate Elements Implicitly and Text`, () => {
        const panelText = [
            'Explore The World',
            'Wild Forest',
            'Sunny Beach',
            'City on Winter',
            'Mountains - Clouds'
        ]
        
        let i = 0

        cy.get('.container')
        .find('.panel')
        .find('h3')
        .each( h3 => {
            cy.wrap(h3)
                .should('contain', panelText[i])
            i++
        })
    })
    counter++
})
