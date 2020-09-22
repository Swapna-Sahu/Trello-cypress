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

    // Testing with empty password
    it('Detect unregistred email id', function() {
        cy.get('#user').type('bichitrananda.sahoo@gmail.com')
        cy.get('#login').click()
        cy.get('#error > .error-message')
          .contains('p','There isn\'t an account for this email')})
})    