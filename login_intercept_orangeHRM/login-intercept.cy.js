import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

describe('Intercept Login Request', () => {

    it('Intercept API after login', () => {
        loginPage.visit();
        loginPage.enterUsername('Admin');
        loginPage.enterPassword('admin123');

        cy.intercept('GET', '**/api/v2/dashboard/employees/action-summary').as('actionSummary');

        loginPage.clickLogin();

        cy.wait('@actionSummary');
        cy.url().should('include', '/dashboard');
    });
});