class LoginPage{
  visit() {
    cy.visit (Cypress.env("BASE_URL"));
  }

  fillEmail() {
    const field = cy.get(`[placeholder='Email Address'][type='email']`);
    field.clear();
    field.type(Cypress.env("EMAIL"));

    return this;
  }

  fillPassword() {
    const field = cy.get(`[type='password'][placeholder='Password']`);
    field.clear();
    field.type(Cypress.env("PASSWORD"));

    return this;
  }

  submit() {
    const button = cy.get(`.login-button[type='submit']`);
    button.click();
  }

  getLogo() {
    return cy.get(".sidebar-logo-link").should("be.visible");
  }

  getURL() {
    return cy.url().should('eq', '/home');
  }
  getTitle() {
    return cy.title().should('eq', 'Analytics Dashboard - Four Eyes Insight');
  }
  getLocalStorage() {
    return cy.url().should('include', '/home', ()=>{
      expect(localStorage.getItem("/home")).to.exist()   // check local storage
        });
  }
}

export default LoginPage;
