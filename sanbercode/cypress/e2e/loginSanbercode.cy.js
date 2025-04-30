describe('Login Testing', () => {
       /*fake identity */
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });
    it('coba login akun', () => {
        cy.visit('https://sanbercode.com/');
        cy.get('.mainmenu > :nth-child(6)').click()
    })
    it('Coba login setelah membuat akun register', () =>{
        cy.visit('https://sanbercode.com/login');
        cy.get('#loginform > :nth-child(4) > .col-xs-12 > .form-control').type('apasi@gmail.com')
        cy.get('#password-field').type('Ganteng123@')
        cy.get('.col-xs-12 > .fa').click()
        cy.get('#btnKirim').click()
    })
})