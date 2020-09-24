
describe('API testing',() => {

    it('POST - upload file', () => {
        
        cy.fixture('/imageFile.jpg').then((file) => {
    const item = { 
        "key"   :   "ebaba4c18c6445737c3dad2a28d9451a",
        "token" :   "04a00ddb0d15a1cfb1371b01698788fceaa3ead4d26875705b151882ab1a8067",
        "Accept" :  "application/json",
        "file"  :   file 
    }

    const Headers = {
        "Accept" :  "application/json"
    }

   
    // REST API -  https://api.trello.com/1/cards/{id}/attachments
    cy.request('POST','https://api.trello.com/1/cards/5f6b01460e01cb8a8a040d0a/attachments',item)
   
        })
    })
})