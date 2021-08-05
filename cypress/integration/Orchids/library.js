"use strict";
let data = require("../Orchids/testData/data.js");
let LogInOut = require("./pageObjects/logInOut.js");
let libraryActions = require("../Orchids/pageObjects/libraryActions.js");
const logInOut = require("./pageObjects/logInOut.js");

describe("Test Orchids ", function () {
  before(() => {
    cy.visit("https://gcloud-web.embodee.com/authentication/sign-in");
  });

  // afterEach(() => {
  //   cy.wait(3000)
  // });

  after(() => {
    logInOut.logOut();
  });

  it("Shall log in Orchids site", function () {
    LogInOut.positiveLogin(data.login);
  });

  it("Shall Open the library", function () {
    libraryActions.openLibrary();
  });

  it("Shall go to Colors", function () {
    libraryActions.libraryNavigation("Colors")
  });

  it("Shall go to Materials", function () {
    libraryActions.libraryNavigation("Materials")
  });

  it("Shall go to Prints", function () {
    libraryActions.libraryNavigation('Prints')
  });

  it("Shall go to Graphics", function () {
    libraryActions.libraryNavigation('Graphics')
  });
  // it("Shall delete the created ptoduct", function () {
  //   productManipulation.deleteSelectedProduct();
  // });

});