class ProductsPage {
  // Locators for the Products page
  get searchInput() {
    return 'input[name="search"]';
  }

  get searchButton() {
    return 'button[type="submit"]';
  }

  get productList() {
    return '.product-list';
  }

  get addToCartButton() {
    return '.add-to-cart';
  }

  // Methods to interact with the Products page
  searchProduct(productName) {
    cy.get(this.searchInput).type(productName);
    cy.get(this.searchButton).click();
  }

  verifyProductList() {
    cy.get(this.productList).should('be.visible');
  }

  addToCart() {
    cy.get(this.addToCartButton).first().click();
  }
}

module.exports = new ProductsPage();