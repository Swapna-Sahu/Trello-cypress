describe('Cards',function() {
    it('open board',function() {
        cy.openboard()
    })

    it('find Add card button',function(){
        cy.get('textarea').type('include text here {enter}')
        cy.get('a')
        .should('have.attr','href')
        .and('include','https://trello.com/#')
    })    

    it('add card',function(){
        cy.get('textarea').type('include text here {enter}') 
    })    
})    