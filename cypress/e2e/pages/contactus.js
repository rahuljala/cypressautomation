class ContactUsPage {
  // Locators for the Contact Us page
  get nameInput() {
    return 'input[name="name"]';
  }

  get emailInput() {
    return 'input[name="email"]';
  }

  get subjectInput() {
    return 'input[name="subject"]';
  }

  get messageTextarea() {
    return 'textarea[name="message"]';
  }

  get submitButton() {
    return 'button[type="submit"]';
  }

  // Methods to interact with the Contact Us page
  fillContactForm(name, email, subject, message) {
    cy.get(this.nameInput).type(name);
    cy.get(this.emailInput).type(email);
    cy.get(this.subjectInput).type(subject);
    cy.get(this.messageTextarea).type(message);
  }

  submitForm() {
    cy.get(this.submitButton).click();
  }
}

module.exports = new ContactUsPage();