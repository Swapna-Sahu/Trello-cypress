describe('Trello web page', function () {

    // Validating the browser connection
    it('Browser connection',function(){
        cy.visit('https://trello.com/')
        cy.title().should('equal','Trello')
    })

    // validating login button goes to login page
    it('Login page', function(){
        cy.get('.btn-link').click()
        cy.contains('h1','Log in to Trello')
    })
})    