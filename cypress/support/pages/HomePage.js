///<reference types="cypress" />

// #region Import
import homeLoc from '../locators/HomeLocators'
import homeModel from '../models/HomeModel';
import homeMessages from '../messages/HomeMessages'
// #endregion

// #region Constants

// #endregion


class HomePage {

    fillNumerOfPeopleInHousehold() {
        cy.get(homeLoc.HOUSEHOLD_INPUT).type(homeModel.RANDOM_NUMER_OF_PEOPLE)
    }

    fillZipCode() {
        cy.get(homeLoc.ZIPCODE_INPUT).type(homeModel.VALID_ZIP_CODE)

    }

    fillInvalidNumerOfPeopleInHousehold() {
        cy.get(homeLoc.HOUSEHOLD_INPUT).type(homeModel.INVALID_NUMER_OF_PEOPLE)
    }

    fillInvalidZipCode() {
        cy.get(homeLoc.ZIPCODE_INPUT).type(homeModel.INVALID_ZIP_CODE)

    }

    clickGetStarted() {
        cy.get(homeLoc.GET_STARTED_BUTTON).click()

    }

    validateCalculatorPage() {
        cy.contains('Home Energy')

    }

    validateInvalidZipCodeMessage() {
        cy.contains(homeMessages.INVALID_ZIP_CODE)

    }

    validateInvalidNumberOfPeopleMessage() {
        cy.contains(homeMessages.INVALID_NUMBER_OF_PEOPLE)
    }

}

export default HomePage;

