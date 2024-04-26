const url = 'https://50projects50days.com/projects/expanding-cards/'

describe('Expanding Cards page', () => {
  before(() => {
    cy.visit(url)
  })

  it('Container loads', () => {
    cy.get('.container').exists();
    
  })

})