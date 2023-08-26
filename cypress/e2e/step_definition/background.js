import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const login = require("../../pageObjects/loginPage");

btnIngresar='.MuiButton-label';

Given("enter the login form", () => {
  login.ingresarUrl()
});

When("type user and password an login", function(dataTable)
 {
  //login.ingresarUsuario();
  //login.ingresarClave();
  cy.get("input[placeholder='Username']").type(dataTable.rawTable[1][0]);
  cy.get("input[placeholder='Password']").type(dataTable.rawTable[1][1]);
  cy.get("button[type='submit']").click()
 // cy.get("#outlined-required").type(dataTable.rawTable[1][0]);
});

Then("show message user or password wrong", () => {
  cy.get("div.orangehrm-login-layout div.orangehrm-login-layout-blob div.orangehrm-login-container div.orangehrm-login-slot-wrapper div.orangehrm-login-slot div.orangehrm-login-form div.orangehrm-login-error:nth-child(1) div.oxd-alert.oxd-alert--error div.oxd-alert-content.oxd-alert-content--error > p.oxd-text.oxd-text--p.oxd-alert-content-text")
  .should('be.visible')
  .then(($p) => {
    expect($p).to.have.text('Invalid credentials')
  }) 
});

Then("show principal dashboard", () => {
  cy.get('.oxd-topbar-header-breadcrumb-module')
  .should('be.visible')
  .then(($p) => {
    expect($p).to.have.text('Dashboard')
  }) 
});

