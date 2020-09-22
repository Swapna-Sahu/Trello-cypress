
describe('Trello web page', function () {

    // Validating the browser connection
    it('Browser connection',function(){
        cy.visit('https://trello.com/')
        cy.title().should('equal','Trello')
    })

    // Test the sign up button
    /*it('Sign up page', function(){
        cy.get('[data-analytics-button= whiteSignupHeroButton]').click()
        cy.contains('h1','Sign up for your account')
    })*/

    it('Sign up page', function(){
        cy.get('[data-analytics-button= greenSignupHeroButton]').click()
        cy.contains('h1','Sign up for your account')
    })

    // Testing using email id 
    it('Input Email id', function(){
        cy.get('[id=email]').type('test@gmail.com{enter}')
        //cy.get('#signup-submit').contains('Sign').click()
    })

    // Full name 
    it('Enter full name', function(){
        cy.get('#name').type('Swapna Sahu{enter}')
        //cy.get('.ValidationElement_WarningIcon')
    })

    // Full name 
    it('Enter password', function(){
        cy.get('#password').type('hellotest12{enter}')
        cy.get('#signup-submit').click({force: true})
    })


})