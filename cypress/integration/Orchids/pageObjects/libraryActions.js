"use strict";

const actions = require("../helperFiles/actions.js");

let productManipulation = function () {
  this.openLibrary = function () {
    // let el = "";
    let elLibraryBtn = "div.left-column.menu-wrap ul li" // has to get the second one from the list
    actions.clickButton(elLibraryBtn, 1);
    cy.wait(500);
    cy.get('ul.ui-tabs-container li a').contains('Prints').click()
  };
  this.libraryNavigation = function (menu) {
    cy.get('ul.ui-tabs-container li a').contains(menu).click()
  };

};
module.exports = new productManipulation();