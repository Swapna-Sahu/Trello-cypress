/// <reference types="cypress" />

context('Window',() => {
    beforeEach(() => {
        cy.visit('https://trello.com/')
    })

    it('open in mac 15',() => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in iphone 6',() => {
        cy.viewport('iphone-6')
        cy.screenshot()
        cy.wait(200)
    })
})