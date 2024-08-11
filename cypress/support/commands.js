// #region Import
import HomePage from "../support/pages/HomePage";

// #endregion

// #region Constants
const homePage = new HomePage()

// #endregion

Cypress.Commands.add('fillDataHome',  () => {
    homePage.fillNumerOfPeopleInHousehold()
    homePage.fillZipCode()
    homePage.clickGetStarted()
    homePage.validateCalculatorPage()

})