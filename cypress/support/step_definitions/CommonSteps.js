// #region Import
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";

// #endregion

// #region Constants
const homePage = new HomePage()

// #endregion

// #region Given
Given('I visited home page', () => {
    cy.visit("/")   
})

// #endregion

// #region And
Given('access the calculator successfully', () => {
    cy.fillDataHome()
})

// #endregion

// #region When

// #endregion

// #region Then

// #endregion
