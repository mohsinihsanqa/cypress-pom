/// <reference types="cypress" />
import LoginPage from "../src/login";
import LoginApi from "../src/api";

describe("Login tests", () => 
{
it('should login from UI', () =>{
const login = new LoginPage();
  login.visit();
  login.fillEmail();
  login.fillPassword();
  login.submit();
  login.getLogo();
})

it('should login and logout from API', () =>{
const api = new LoginApi();
  api.apiLogin();
  })
})
