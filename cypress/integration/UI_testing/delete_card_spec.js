describe('Cards',function() {
    it('create first board',function() {
        cy.openboard()
    })
    
    it('Archive the card',function() {        
        cy.get('a')
        .should('have.attr','href')
        .and('include','https://trello.com/c/bRGgk2sl/4-include-text-here')
        .should('contain','Archive')
        .click()
    })
        
    it('delete the card',function() {          
        cy.get('a')
        .should('have.attr','href')
        .and('include','https://trello.com/c/bRGgk2sl/4-include-text-here')
        .should('contain','-Delete')
        .click()

        cy.get('input')
        .should('hav.have.attr','data-test-id')
    })    

})    