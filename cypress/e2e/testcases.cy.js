describe('Automation Exercise Test Cases', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Test Case 1: Register User', () => {
    cy.get('a[href="/login"]').click();
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type(`john${Date.now()}@example.com`);
    cy.get('button[type="submit"]').contains('Signup').click();
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').contains('Create Account').click();
    cy.contains('Account Created!').should('be.visible');
  });

  it('Test Case 2: Login User with correct email and password', () => {
    cy.get('a[href="/login"]').click();
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').contains('Login').click();
    cy.contains('Logged in as').should('be.visible');
  });

  it('Test Case 3: Login User with incorrect email and password', () => {
    cy.get('a[href="/login"]').click();
    cy.get('input[name="email"]').type('wronguser@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').contains('Login').click();
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });

  it('Test Case 4: Logout User', () => {
    cy.get('a[href="/login"]').click();
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').contains('Login').click();
    cy.contains('Logged in as').should('be.visible');
    cy.get('a[href="/logout"]').click();
    cy.contains('Login').should('be.visible');
  });

  it('Test Case 5: Register User with existing email', () => {
    cy.get('a[href="/login"]').click();
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('button[type="submit"]').contains('Signup').click();
    cy.contains('Email Address already exist!').should('be.visible');
  });

  it('Test Case 6: Contact Us Form', () => {
    cy.get('a[href="/contact_us"]').click();
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('johndoe@example.com');
    cy.get('input[name="subject"]').type('Test Subject');
    cy.get('textarea[name="message"]').type('This is a test message.');
    cy.get('button[type="submit"]').contains('Submit').click();
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
  });

  it('Test Case 7: Verify Test Cases Page', () => {
    cy.get('a[href="/test_cases"]').click();
    cy.url().should('include', '/test_cases');
    cy.contains('Test Cases').should('be.visible');
  });
});

describe('Automation Exercise Test Cases - Continued', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    cy.get('[data-qa="products-link"]').click();
    cy.url().should('include', '/products');
    cy.get('[data-qa="product-list"]').should('be.visible');
    cy.get('[data-qa="product-detail-link"]').first().click();
    cy.url().should('include', '/product_details');
    cy.get('[data-qa="product-detail"]').should('be.visible');
  });

  it('Test Case 9: Search Product', () => {
    cy.get('[data-qa="products-link"]').click();
    cy.get('[data-qa="search-input"]').type('T-shirt');
    cy.get('[data-qa="search-button"]').click();
    cy.get('[data-qa="search-results"]').should('contain', 'T-shirt');
  });

  it('Test Case 10: Verify Subscription in home page', () => {
    cy.get('[data-qa="subscription-input"]').type('testuser@example.com');
    cy.get('[data-qa="subscription-button"]').click();
    cy.contains('You have been successfully subscribed!').should('be.visible');
  });

  it('Test Case 11: Verify Subscription in Cart page', () => {
    cy.get('[data-qa="cart-link"]').click();
    cy.get('[data-qa="subscription-input"]').type('testuser@example.com');
    cy.get('[data-qa="subscription-button"]').click();
    cy.contains('You have been successfully subscribed!').should('be.visible');
  });

  it('Test Case 12: Add Products in Cart', () => {
    cy.get('[data-qa="products-link"]').click();
    cy.get('[data-qa="add-to-cart-button"]').first().click();
    cy.get('[data-qa="cart-link"]').click();
    cy.get('[data-qa="cart-items"]').should('be.visible');
  });

  it('Test Case 13: Verify Product quantity in Cart', () => {
    cy.get('[data-qa="products-link"]').click();
    cy.get('[data-qa="add-to-cart-button"]').first().click();
    cy.get('[data-qa="cart-link"]').click();
    cy.get('[data-qa="cart-quantity"]').should('contain', '1');
  });

  it('Test Case 14: Place Order: Register while Checkout', () => {
    cy.get('[data-qa="products-link"]').click();
    cy.get('[data-qa="add-to-cart-button"]').first().click();
    cy.get('[data-qa="cart-link"]').click();
    cy.get('[data-qa="checkout-button"]').click();
    cy.get('[data-qa="register-link"]').click();
    cy.get('[data-qa="name-input"]').type('John Doe');
    cy.get('[data-qa="email-input"]').type(`john${Date.now()}@example.com`);
    cy.get('[data-qa="password-input"]').type('password123');
    cy.get('[data-qa="register-button"]').click();
    cy.get('[data-qa="place-order-button"]').click();
    cy.contains('Order Placed!').should('be.visible');
  });

  it('Test Case 15: Place Order: Register before Checkout', () => {
    cy.get('[data-qa="register-link"]').click();
    cy.get('[data-qa="name-input"]').type('Jane Doe');
    cy.get('[data-qa="email-input"]').type(`jane${Date.now()}@example.com`);
    cy.get('[data-qa="password-input"]').type('password123');
    cy.get('[data-qa="register-button"]').click();
    cy.get('[data-qa="products-link"]').click();
    cy.get('[data-qa="add-to-cart-button"]').first().click();
    cy.get('[data-qa="cart-link"]').click();
    cy.get('[data-qa="checkout-button"]').click();
    cy.get('[data-qa="place-order-button"]').click();
    cy.contains('Order Placed!').should('be.visible');
  });

  it('Test Case 16: Place Order: Login before Checkout', () => {
    cy.get('[data-qa="login-link"]').click();
    cy.get('[data-qa="email-input"]').type('testuser@example.com');
    cy.get('[data-qa="password-input"]').type('password123');
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="products-link"]').click();
    cy.get('[data-qa="add-to-cart-button"]').first().click();
    cy.get('[data-qa="cart-link"]').click();
    cy.get('[data-qa="checkout-button"]').click();
    cy.get('[data-qa="place-order-button"]').click();
    cy.contains('Order Placed!').should('be.visible');
  });

  it('Test Case 17: Remove Products From Cart', () => {
    cy.get('[data-qa="products-link"]').click();
    cy.get('[data-qa="add-to-cart-button"]').first().click();
    cy.get('[data-qa="cart-link"]').click();
    cy.get('[data-qa="remove-item-button"]').first().click();
    cy.get('[data-qa="cart-items"]').should('not.exist');
  });
});