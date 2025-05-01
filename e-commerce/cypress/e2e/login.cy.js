describe('E-commerce Login Page Testing ', () => {
    it('to login page', () => {
      cy.visit('https://automationexercise.com/')
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    })
    it.only('Filling in personal data - email address - password', () => {
        cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="login-email"]').type('alexander@gmail.com')
        cy.get('[data-qa="login-password"]').type('Handsome12#')
        cy.get('[data-qa="login-button"]').click()
      })
})