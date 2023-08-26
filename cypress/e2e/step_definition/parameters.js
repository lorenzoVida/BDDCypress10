import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const web = require("../../pageObjects/parameterPage");

Given("Enter the web google", () => {
  web.enterWebsite()
  });

When("I search the word {string}", (product) => {
  web.searchProduct(product);
  });