describe('Cards',function() {
    it('login',function() {
        cy.login()
    })
    
    it('create first board',function() {    
        cy.contains('h1','Welcome to Trello!')
        cy.get('[data-test-id=create-board-submit-button]')
        .type('Testing Project{enter}')
    })
       
    it('next page - Create structure with lists',function() {
        cy.contains('h1','Create structure with lists')
        cy.get('[data-test-id=continue-button]').click()
    })
    
    it('next page -Take a load off with cards',function() {
        cy.contains('h1','Take a load off with cards')
        cy.get('[data-test-id=continue-button]').click()
    })
    
    it('next page - the first input for the card',function() {
        cy.get('[data-test-id=card-name-input]')
        .type('Book Flight{enter}')
        cy.get('[data-test-id=continue-button]').click()
    })
    
    it('next page - Get into the details',function() {
        cy.contains('h1','Get into the details')
        cy.get('[data-test-id=continue-button]').click()
    })    
    
    it('Final page',function() {
        cy.contains('h1','You\'re ready to get started!')
        cy.get('[data-test-id=continue-button]').click()
        // Created new board named Testing Board
        cy.contains('h1','Testing Board')
    })
})    