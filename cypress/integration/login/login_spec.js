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

    // REST API for login - not in the trello API list 
    it('POST - login', () => {

        // REST API -  https://trello.com/authenticate_openid
        cy.request({
            method  : 'POST',
            url     : 'https://trello.com/authenticate_openid',
            body    :  'confirmNew=true&locale=en-GB&openid_identifier=https://id.atlassian.com/openid/v2/op&provider=atlassian&restrictEmail=true&user=swapna.sahu15@gmail.com',
            header  : {
                'Content-Type'  :   'application/x-www-form-urlencoded',
                'User-Agent'    :   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                'Accept'        :   'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
            }
        })
    })    
})  