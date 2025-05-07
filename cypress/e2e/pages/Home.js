class HomePage {

  visit() {
    cy.visit('https://www.automationexercise.com');
  }

  get logo() {
    return cy.get('.logo img');
  }

  get home() {
    return cy.get('.fa.fa-home');
  }

  get signUpButton() {
    return cy.get('.login');
  }

  get contactUsButton() {
    return cy.get('.contact-us');
  }

  get productsButton() {
    return cy.get("a[href='/products']");
  }

  get cartButton() {
    return cy.get('.cart');
  }

  // Locators for the Home page
  get homeLink() {
    return 'a[href="/"]';
  }

  get productsLink() {
    return 'a[href="/products"]';
  }

  get cartLink() {
    return 'a[href="/view_cart"]';
  }

  get signupLoginLink() {
    return 'a[href="/login"]';
  }

  get contactUsLink() {
    return 'a[href="/contact_us"]';
  }

  // Methods to interact with the Home page
  clickHome() {
    cy.get(this.homeLink).click();
  }

  clickProducts() {
    cy.get(this.productsLink).click();
  }

  clickCart() {
    cy.get(this.cartLink).click();
  }

  clickSignupLogin() {
    cy.get(this.signupLoginLink).click();
  }

  clickContactUs() {
    cy.get(this.contactUsLink).click();
  }
}

module.exports = new HomePage();