/// <reference types='Cypress' />

describe('Template Name', () => {
    let counter = 1

	beforeEach(() => {
        cy.visit('/todo-list/')
	})

    it(`Test ${counter}: URL Verification`, () => {
        cy.url()
            .should('include', '/todo-list/')
    })
    counter++

    it(`Test ${counter}: HTML Elements`, () => {

        cy.get('h1')
        .as('h1')

        cy.get('form')
        .as('form')

        cy.get('@form')
        .find('input')
        .as('input')

        cy.get('@form')
        .find('ul')
        .as('ul')

        cy.get('small')
        .as('small')

        cy.get('script')

    })
    counter++

    it(`Test ${counter}: Onload Text Values`, () => {
        cy.get('h1')
        .as('h1')

        cy.get('form')
        .find('input')
        .as('input')
        
        cy.get('@h1')
        .should('contain', 'todos')

        cy.get('@input').then( jqinput => {
            const placeholder = jqinput.text()
            expect(placeholder).to.eql.toString('Enter your todo')
        })
    })
    counter++

    it(`Test ${counter}: Functionality`, () => {
        const todos = [
            'Do homework',
            'Take out trash',
            'Study Cypress'
        ]

        let i = 0;

        cy.get('form')
        .find('input')
        .as('input')

        todos.forEach( todo => {
            cy.get('@input').type(todo).type('\n')
            cy.get('@input').then( jqinput => {
                const text = jqinput.text()
                expect(text).to.eql.toString('')
            })
        })

        cy.get('li').then( jqli => {
            const text = jqli.text()
            expect(text).to.eql.toString(todos[i])
            i++
        })

    })
    counter++

    it(`Test ${counter}: Sad path`, () => {
        cy.get('form')
        .find('input')
        .as('input')

        const i = 0

        cy.get('@input').type('\n')

        cy.get('ul').should('not.contain.html', 'li')
    })
    counter++

});
