// #region Import
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import CarbonFootprintCalculatorPage from "../pages/CarbonFootprintCalculatorPage"
// #endregion

// #region Constants
const carbonFootprintCalculatorPage = new CarbonFootprintCalculatorPage()
// #endregion

// #region Given

// #endregion

// #region And
And('select a primary heating {string}', (source) => {
    carbonFootprintCalculatorPage.selectPrimaryHeatingSource(source)
    
})

And('enter your monthly consumption in dollars', () => {
    carbonFootprintCalculatorPage.fillNaturalGasConsumption()
    carbonFootprintCalculatorPage.fillElectricityConsumption()
    carbonFootprintCalculatorPage.fillFuelOilConsumption()
    carbonFootprintCalculatorPage.fillPropaneConsumption()
})

And('fill reduce your mission', () => {
    carbonFootprintCalculatorPage.fillHeatingCooling()
    carbonFootprintCalculatorPage.fillLighting()
    carbonFootprintCalculatorPage.fillPowerSourceSettings()
    carbonFootprintCalculatorPage.fillWashingDrying()
    carbonFootprintCalculatorPage.fillEnergyStarProducts()
    
})

And('fill vechicle informations', () => {
    carbonFootprintCalculatorPage.fillCurrentMaintenance()
    carbonFootprintCalculatorPage.fillVehicleMiles()
    carbonFootprintCalculatorPage.fillAverageGasMileage()
    carbonFootprintCalculatorPage.fillReduceMiles()
    carbonFootprintCalculatorPage.fillReplaceVehicle()

})

And('fill waste informations', () => {
    carbonFootprintCalculatorPage.checkProductsYouCurrentlyRecycle()
    carbonFootprintCalculatorPage.checkProductsYouDoNotRecycle()

})

// #endregion

// #region When
When('click to continue to transportation', () => {
    carbonFootprintCalculatorPage.clickToContinueToTransportation()

})

When('click to continue to waste', () => {
    carbonFootprintCalculatorPage.clickToContinueToWaste()

})

When('click to continue to report', () => {
    carbonFootprintCalculatorPage.clickToContinueToReport()

})

// #endregion

// #region Then
Then('sytem returns transportation tab', () => {
    carbonFootprintCalculatorPage.verifyTransportationTab()

    
})

Then('sytem returns waste tab', () => {
    carbonFootprintCalculatorPage.verifyWasteTab()
    
})


Then('system returns household carbon footprint report', () => {
    carbonFootprintCalculatorPage.verifyReportPage()
    
})
// #endregion
