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

    // Testing with empty email and password
    it('Requires email for log in', function() {
        cy.get('#login').contains('Log in').click()
        cy.get('.error-message')
          .should('contain','Missing email')
        cy.screenshot()
        cy.wait(200)
    })
})    