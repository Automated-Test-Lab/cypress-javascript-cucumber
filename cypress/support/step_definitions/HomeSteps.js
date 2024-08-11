// #region Import
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";

// #endregion

// #region Constants
const homePage = new HomePage()

// #endregion

// #region Given

// #endregion

// #region And
And('I fill number of people in household', () => {
    homePage.fillNumerOfPeopleInHousehold()
})

And('fill valid zip code', () => {
    homePage.fillZipCode()
})

And('fill invalid zip code', () => {
    homePage.fillInvalidZipCode()
})

And('fill invalid number of people in household', () => {
    homePage.fillInvalidNumerOfPeopleInHousehold()
})


// #endregion

// #region When
When('click get started', () => {
    homePage.clickGetStarted()
})

// #endregion

// #region Then
Then('system returns calculator page', () => {
    homePage.validateCalculatorPage()
    
})

Then('system returns please please enter a valid five-digit ZIP Code message', () => {
    homePage.validateInvalidZipCodeMessage()
})

Then('system returns please enter a valid number of people message', () => {
    homePage.validateInvalidNumberOfPeopleMessage()
    
})

// #endregion
