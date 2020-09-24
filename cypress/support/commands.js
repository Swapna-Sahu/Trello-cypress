// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("openboard", () => { 
    cy.login()
    cy.contains('h3','Personal Boards')
    cy.get('a')
    .should('have.attr','href')
    .and('include','https://trello.com/b/AVbCy2tp/test')
    .click()
})

Cypress.Commands.add("login", () => { 
    cy.visit('https://trello.com/')
    cy.get('a')
    .should('have.attr','href')
    .and('include','/login')
    .click()
    cy.get('#user').type('swapna.sahu15@gmail.com{enter}')
    cy.get('#password').type('smartfun12{enter}')
    cy.url().should('equal','https://trello.com/swapna249/boards')
})