describe('E-commerce Product Testing ', () => {
  it('login page to product page - goods purchasing process - All Products - View Product (Sleeveles Dress) - Add to Cart - View Cart - Payment ', () => {
   /* process login */
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type('alexander@gmail.com')
    cy.get('[data-qa="login-password"]').type('Handsome12#')
    cy.get('[data-qa="login-button"]').click()
    /* process buying */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click()
    cy.get('#quantity').clear().type('2');
    cy.get(':nth-child(5) > .btn').click()
    cy.get('u').click()
    cy.get('.col-sm-6 > .btn').click()
  })
  it('goods purchasing process - All Products - Add Product  - Add to Cart - continue shopping - Add Product - view cart - Payment', () => {
    /* process login */
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type('alexander@gmail.com')
    cy.get('[data-qa="login-password"]').type('Handsome12#')
    cy.get('[data-qa="login-button"]').click()
    /* process buying */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click() /* mens t-shirt */
    cy.get('.modal-footer > .btn').click() /* continue shopping */
    cy.get(':nth-child(9) > .product-image-wrapper > .single-products > .productinfo > .btn').click()/* madame top for women */
    cy.get('.modal-footer > .btn').click() /* continue shopping */
    cy.get(':nth-child(17) > .product-image-wrapper > .single-products > .productinfo > .btn').click() /*litle girls mt. panda shirt*/
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click() /* cart page */
    cy.get('.col-sm-6 > .btn').click() /* checkout */
  })
})