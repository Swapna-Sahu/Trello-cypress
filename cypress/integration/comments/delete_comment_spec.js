describe('API testing',() => {

    it('DELETE - delete comment', () => {

    const item = { 
    "key"   :   "ebaba4c18c6445737c3dad2a28d9451a",
    "token" :   "04a00ddb0d15a1cfb1371b01698788fceaa3ead4d26875705b151882ab1a8067"
    }

    // REST API -  https://api.trello.com/1/cards/{id}/actions/{idAction}/comments 
    cy.request('DELETE','https://api.trello.com/1/cards/5f6a0491e6c9a1765d2944f1/actions/5f6a2eb849aa3e6e7d01f65e/comments',item)
    
    })
})