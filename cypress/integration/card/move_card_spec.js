describe('API testing',() => {

    it('PUT - update card', () => {

    const item = { 
    "key"   :   "ebaba4c18c6445737c3dad2a28d9451a",
    "token" :   "04a00ddb0d15a1cfb1371b01698788fceaa3ead4d26875705b151882ab1a8067",
    "desc"  :   "Tester's testing",
    "idList":   "5f69c57cd361a842180ed54a"
    }

    cy.request('PUT','https://api.trello.com/1/cards/5f6a1dd970307245589ccde4',item)
    

    })
})