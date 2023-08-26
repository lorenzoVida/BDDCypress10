import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const webShop = require("../../pageObjects/examplePage");

Given("Enter the web shop exito.com", () => {
    webShop.enterWebsite()
  });

When("I fill search {string}", (nameProduct) => {
    webShop.searchProduct(nameProduct);
  });