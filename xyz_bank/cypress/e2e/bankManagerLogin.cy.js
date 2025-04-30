describe("Testing Halaman Bank Manager Login", () => {
    it ('Test Halaman Utama Login', () =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get(':nth-child(3) > .btn').click()
    })
    it ('Test Halaman Bank Manager Login pada Fitur Add Account', () =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust');
        cy.get(':nth-child(1) > .form-control').type('Yulio');
        cy.get(':nth-child(2) > .form-control').type('Putra');
        cy.get(':nth-child(3) > .form-control').type('110234');
        cy.get('form.ng-dirty > .btn').click({force: true});
    })
    it('Test Halaman Bank Manager Login pada Fitur Open Account', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/openAccount');
        cy.get('#userSelect').select('Harry Potter');
        cy.get('#currency').select('Dollar');
        cy.get('form').find('button[type="submit"]').click();
    });
    it ('Test Halaman Bank Manager Login pada Fitur Delete Customers', () =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/list');
        cy.get('.form-control').type('Harry');
        cy.get(':nth-child(5) > button').click()
    })
    it ('Test Halaman Bank Manager pada Fitur Home', () =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/list');
        cy.get('.home').click()
    })
})