
describe('API testing',() => {

    it('POST - create card', () => {

    const item = { 
    "key"   :   "ebaba4c18c6445737c3dad2a28d9451a",
    "token" :   "04a00ddb0d15a1cfb1371b01698788fceaa3ead4d26875705b151882ab1a8067",
    "name"  :   "Task-1",
    "desc"  :   "Documentation",
    "idList":   "5f69c57caeef767becdb0179"
    }

    // REST API -  https://api.trello.com/1/cards
    cy.request('POST','https://api.trello.com/1/cards',item)
    .then(function(response) {
        expect(response.body).have.property('name')
    })

    })
})