describe('Trello web page', function () {

    // Validating the browser connection
    it('Browser connection',function(){
        cy.visit('https://trello.com/')
        cy.title().should('equal','Trello')
    })

    // Test the sign up white button
    it('Sign up page', function(){
        cy.get('[data-analytics-button= whiteSignupHeroButton]').click()
        cy.contains('h1','Sign up for your account')
    })
})    