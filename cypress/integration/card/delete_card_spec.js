describe('API testing',() => {

    it('DELETE - delete card', () => {

    const item = { 
    "key"   :   "ebaba4c18c6445737c3dad2a28d9451a",
    "token" :   "04a00ddb0d15a1cfb1371b01698788fceaa3ead4d26875705b151882ab1a8067"
    }
    cy.request('DELETE','https://api.trello.com/1/cards/5f6a1da274c6c91b72e8ecc8',item)
    
    })
})