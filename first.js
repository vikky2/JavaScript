console.log("Hello World");




/// <reference types="cypress"/>

 it('google test', function() {
    cy.visit('https://google.com/')
    cy.get('.gLFyf').type('Automation Step by Step{enter}')
    // cy.get('[href="https://www.youtube.com/channel/UCTt7pyY-o0eltq14glaG5dg"] > .LC20lb').click()
    cy.contains('Videos').click()


})

it.only('login test', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#menu_pim_viewMyDetails > b').click()
      




    // cy.get('.fcb > a').click()
    // cy.get('[data-testid=royal_email]').type('8386973745')
    // cy.get('[data-testid=royal_pass]').type('vikky8386{enter}')
    // cy.get('[data-testid=royal_login_button]').click()







})
