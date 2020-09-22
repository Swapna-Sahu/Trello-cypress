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

    it('Login using Google account', function() {
        cy.wait(500)
        cy.get('[data-analytics-button=loginWithGmailButton]').click()
        .then((response)=>{
            let url= response
            cy.request(url).its('body').should('include', '</html>')
        })
    
    })
})