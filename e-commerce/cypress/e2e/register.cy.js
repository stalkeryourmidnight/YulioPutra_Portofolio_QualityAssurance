describe('E-commerce Register Page Testing ', () => {
  it('to Register page', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  })
  it.only('Filling in personal data - name user - email address user - gender - password - date of birth - address information', () => {
    /*Process 1/2 */
    cy.visit('https://automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type('Alexander') /* name */
    cy.get('[data-qa="signup-email"]').type('alexander@gmail.com') /* email */
    cy.get('[data-qa="signup-button"]').click()
    /*Process 2/2 */
    cy.get(':nth-child(3) > .top').click() /* Mr. */
    cy.get('form > :nth-child(5)').type('Handsome12#') /* password */
    cy.get('[data-qa="days"]').select(10) /* day */
    cy.get('[data-qa="months"]').select('October') /* month */
    cy.get('[data-qa="years"]').select('1997') /* year */
    cy.get('#newsletter').click() /* newsletter */
    cy.get('#optin').click()
    /*address information */
    cy.get('[data-qa="first_name"]').type('Alexander')
    cy.get('[data-qa="last_name"]').type('Olsen')
    cy.get('[data-qa="company"]').type('Migas')
    cy.get('[data-qa="address"]').type('sydney')
    cy.get('[data-qa="address2"]').type('Wales')
    cy.get('[data-qa="country"]').select('Australia')
    cy.get('[data-qa="state"]').type('New South Wales')
    cy.get('[data-qa="city"]').type('Sydney')
    cy.get('[data-qa="zipcode"]').type('2321')
    cy.get('[data-qa="mobile_number"]').type('618221107428')
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="address2"]').click() /* continue */
  })
})