describe('Cards',function() {
    it('create first board',function() {
        cy.board()
    })
        
    it('open the card',function() {    
        cy.get('a')
        .should('have.attr','href')
        .and('include','https://trello.com/c/bRGgk2sl/4-include-text-here')
        .click()
    })

    it('click edit button',function() {
        cy.get('a')
        .should('have.attr','href')
        .and('include','https://trello.com/c/bRGgk2sl/4-include-text-here')
        .should('have.class','js-edit-desc')
        .click()
    })
    
   
    it('write one comment',function() {
        cy.get('textarea[placeholder=Write a comment…]')
        .type('added comments to the card{enter}')
        cy.get('input')
        .should('have.class','js-save-edit')
    })

       

})    