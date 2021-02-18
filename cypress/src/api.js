class LoginApi{

  apiLogin() {
    cy.request({
      method: "POST",
      url: Cypress.env("LOGIN_API_URL"), 
      body: {
        email:Cypress.env("EMAIL"),
        password: Cypress.env("PASSWORD")
      }
    })
    .then(resp => {
      const token = resp.body.tokens.refreshToken;
      expect(resp.status).to.eq(200)   // asserting response = 200
      expect(resp.body.sites[0].id).to.equal(30)  // asserting site it = 30
      cy.request({
        method: 'POST',
        url: Cypress.env("LOGOUT_API_URL"),
        body: `"${token}"`,
        headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
        }
        })
    }).then(resp => {
      expect(resp.status).to.eq(204)  // asserting status 204
    })
    
    
      return this;
  }
}
export default LoginApi;

