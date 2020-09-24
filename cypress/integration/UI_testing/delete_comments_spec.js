describe('Cards',function() {
    it('add comment to the card - include-text-here ',function() {
        cy.openboard()
    })
    
    it('open the card ',function() {
        cy.get('a')
        .should('have.attr','href')
        .and('include','https://trello.com/c/bRGgk2sl/4-include-text-here')
        .click()
    })
    
    it('delete  one comment',function() {    
        cy.get('a')
        .should('have.attr','href')
        .and('include','https://trello.com/c/bRGgk2sl/4-include-text-here')
        .should('have.class','js-confirm-delete-action')
        .click()
        
    })    

})   