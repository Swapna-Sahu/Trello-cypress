describe('Trello web page', function () {

    // Validating the browser connection
    it('Browser connection',function(){
        cy.visit('https://trello.com/')
        cy.title().should('equal','Trello')
    })

    it('Login page', function(){
        cy.get('.btn-link').click()
        cy.contains('h1','Log in to Trello')
    })

    // Testing with success login 
    it('requires password', function() {
        cy.get('#user').type('swapna.sahu15@gmail.com')
        cy.get('#login').click()
    })
})  