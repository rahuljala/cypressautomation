class SignupLoginPage {
  // Locators for the Signup/Login page
  get signupNameInput() {
    return 'input[name="name"]';
  }

  get signupEmailInput() {
    return 'input[name="email"]';
  }

  get signupButton() {
    return 'button[type="submit"]';
  }

  get loginEmailInput() {
    return 'input[name="email"]';
  }

  get loginPasswordInput() {
    return 'input[name="password"]';
  }

  get loginButton() {
    return 'button[type="submit"]';
  }

  // Methods to interact with the Signup/Login page
  fillSignupForm(name, email) {
    cy.get(this.signupNameInput).type(name);
    cy.get(this.signupEmailInput).type(email);
  }

  submitSignup() {
    cy.get(this.signupButton).click();
  }

  fillLoginForm(email, password) {
    cy.get(this.loginEmailInput).type(email);
    cy.get(this.loginPasswordInput).type(password);
  }

  submitLogin() {
    cy.get(this.loginButton).click();
  }
}

module.exports = new SignupLoginPage();