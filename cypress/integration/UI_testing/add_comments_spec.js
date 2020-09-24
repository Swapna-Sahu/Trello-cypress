describe('Cards',function() {
    it('add comment to the card - include-text-here ',function() {
        cy.openboard()
    })

    it('open the card',function() {
        cy.get('a')
        .should('have.attr','href')
        .and('include','https://trello.com/c/bRGgk2sl/4-include-text-here')
        .click()
    })
        
    it('write one comment',function() {
        cy.get('textarea[placeholder=Write a comment…]')
        .type('added comments to the card{enter}')
        cy.get('input')
        .should('have.value','Save')
    })


    it('add multiple comments',function() {
        cy.get('textarea[placeholder=Write a comment…]')
        .type('added comments to the card{enter}')
        cy.get('input')
        .should('have.value','Save')
        cy.get('textarea[placeholder=Write a comment…]')
        .type('added comments to the card{enter}')
        cy.get('input')
        .should('have.value','Save')
        cy.get('textarea[placeholder=Write a comment…]')
        .type('added comments to the card{enter}')
        cy.get('input')
        .should('have.value','Save')
    })    

})   