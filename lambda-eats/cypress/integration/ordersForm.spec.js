describe('Form inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3001/order-form')
        cy.url().should('include', 'localhost')
    })

    it('button is disabled', () => {
        cy.get('button.submit')
          .should('be.disabled')
    })

    it('can type a name', () => {
        cy.get('input[name="name"]')
            .type('Dev One')
            .should('have.value', 'Dev One')
    })

    it('can type instructions', () => {
        cy.get('input[name="instructions"]')
            .type('No anchovies please')
            .should('have.value', 'No anchovies please')
    })

    it('can select a size', () => {
        cy.get('select[name="size"]')
            .select('Large')
            .should('have.value', 'Large')
    })

    it('can select pizza sauce', () => {
        cy.get('[type="radio"]')
            .check('Original Red')
    })

    it('can select toppings', () => {
        cy.get('[type="checkbox"]')
          .check()
    })
   
    it('submit button not disabled any more', () => {
        cy.get('button.submit')
          .should('not.be.disabled')
    })
})