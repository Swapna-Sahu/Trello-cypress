describe('API testing',() => {

    it('POST - add comment', () => {

    const item1 = { 
    "key"   :   "ebaba4c18c6445737c3dad2a28d9451a",
    "token" :   "04a00ddb0d15a1cfb1371b01698788fceaa3ead4d26875705b151882ab1a8067",
    "text"  :   "Multiple comment -1",
    "idList":   "5f69c57caeef767becdb0179"
    }

    const item2 = { 
        "key"   :   "ebaba4c18c6445737c3dad2a28d9451a",
        "token" :   "04a00ddb0d15a1cfb1371b01698788fceaa3ead4d26875705b151882ab1a8067",
        "text"  :   "Multiple comment -2",
        "idList":   "5f69c57caeef767becdb0179"
    }

    const item3 = { 
        "key"   :   "ebaba4c18c6445737c3dad2a28d9451a",
        "token" :   "04a00ddb0d15a1cfb1371b01698788fceaa3ead4d26875705b151882ab1a8067",
        "text"  :   "Multiple comment -3",
        "idList":   "5f69c57caeef767becdb0179"
    }

// REST API -  https://api.trello.com/1/cards/{id}/actions/comments
    cy.request('POST','https://api.trello.com/1/cards/5f6a0491e6c9a1765d2944f1/actions/comments',item1)
    cy.request('POST','https://api.trello.com/1/cards/5f6a0491e6c9a1765d2944f1/actions/comments',item2)
    cy.request('POST','https://api.trello.com/1/cards/5f6a0491e6c9a1765d2944f1/actions/comments',item3)

    })
})