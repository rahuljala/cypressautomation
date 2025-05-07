class CartPage {
  // Locators for the Cart page
  get cartItems() {
    return '.cart_items';
  }

  get checkoutButton() {
    return 'a[href="/checkout"]';
  }

  get continueShoppingButton() {
    return 'a[href="/products"]';
  }

  // Methods to interact with the Cart page
  verifyCartItems() {
    cy.get(this.cartItems).should('be.visible');
  }

  clickCheckout() {
    cy.get(this.checkoutButton).click();
  }

  clickContinueShopping() {
    cy.get(this.continueShoppingButton).click();
  }
}

module.exports = new CartPage();