///<reference types="cypress" />

// #region Import
import calcLoc from '../locators/CarbonFootprintCalculatorLocators'
import calcModel from '../models/CarbonFootprintCalculatorModel';
import calcMessages from '../messages/CarbonFootprintCalculatorMessages'
// #endregion

// #region Constants

// #endregion


class CarbonFootprintCalculatorPage {

    selectPrimaryHeatingSource(source) {
        cy.get(calcLoc.PRIMARY_HEATING_SOURCE_SELECT).select(source)
    }

    fillNaturalGasConsumption() {
        cy.get(calcLoc.NATUAL_GAS_INPUT).type(calcModel.RANDOM_NATURAL_GAS)

    }
    fillElectricityConsumption() {
        cy.get(calcLoc.ELECTRICY_IPUNT).type(calcModel.RANDOM_ELECTRICY)

    }
    fillFuelOilConsumption() {
        cy.get(calcLoc.FUEL_INPUT).type(calcModel.RANDOM_FUEL_OIL)

    }
    fillPropaneConsumption() {
        cy.get(calcLoc.PROPANE_INPUT).type(calcModel.RANDOM_PROPANE)

    }

    fillHeatingCooling() {
        cy.get(calcLoc.ENERGY_AC_INPUT).type(calcModel.THERMOSTAT_SUMMER)
        cy.get(calcLoc.ENERGY_HEAT_INPUT).type(calcModel.THERMOSTAT_WINTER)

    }

    fillLighting() {
        cy.get(calcLoc.NUMBER_OF_LIGHTS_INPUT).type(calcModel.LIGHTS)

    }

    fillPowerSourceSettings() {
        cy.get(calcLoc.INCREAD_POWER_USAGE).type(calcModel.GREEN_POWER)

    }

    fillWashingDrying() {
        cy.get(calcLoc.LOADS_PER_WEEK).type(calcModel.LOADS_PER_WEEK)

    }

    fillEnergyStarProducts() {
        cy.get(calcLoc.FRIDGE_SELECT).select('Will Do')

    }

    clickToContinueToTransportation() {
        cy.get(calcLoc.GO_TO_TRANSPORTATION_BUTTON).click()
    }

    clickToContinueToWaste() {
        cy.get(calcLoc.GO_TO_WASTE_BUTTON).click()
    }

    clickToContinueToReport() {
        cy.get(calcLoc.CONTINUE_TO_REPORT_BUTTON).click()
    }

    verifyTransportationTab() {
        cy.get(calcLoc.PAGE_TITLE).contains('Transportation')
    }

    verifyWasteTab() {
        cy.get(calcLoc.PAGE_TITLE).contains('Waste')
    }

    verifyReportPage() {
        cy.get(calcLoc.PAGE_TITLE).contains('Your Household Carbon Footprint Report')
    }

    fillVehicleMiles() {
        cy.get(calcLoc.MILES_INPUT).type(calcModel.VEHICLE_MILES)
    }

    fillCurrentMaintenance() {
        cy.get(calcLoc.CURRENT_MAIN_SELECT).select('Already Done')
    }

    fillAverageGasMileage() {
        cy.get(calcLoc.GALES_MILEAGE_INPUT).type(calcModel.GALES_MILES)
    }

    fillReduceMiles() {
        cy.get(calcLoc.REDUCE_MILES_INPUT).type(calcModel.REDUCE_MILES)

    }

    fillReplaceVehicle() {
        cy.get(calcLoc.REPLACE_VEHICLE).type(calcModel.REPLACE_VEHICLE)

    }

    checkProductsYouCurrentlyRecycle() {
        cy.get(calcLoc.PLASTIC_CHECKBOK).click()
        cy.get(calcLoc.ALUMINUM_REDUCE_CHECKBOK).click()
    }

    checkProductsYouDoNotRecycle() {
        cy.get(calcLoc.GLASS_REDUCE_CHECKBOK).click()
        cy.get(calcLoc.NEWSPAPER_REDUCE_CHECKBOK).click()
        cy.get(calcLoc.MAGAZINES_REDUCE_CHECKBOK).click()

    }
}

export default CarbonFootprintCalculatorPage;