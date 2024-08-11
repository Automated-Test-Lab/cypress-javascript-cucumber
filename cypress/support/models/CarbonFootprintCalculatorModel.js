// #region Constants

// #endregion

// #region Imports
import { faker } from '@faker-js/faker';
// #endregion

const CarbonFootprintCalculatorModel = {
    "RANDOM_NATURAL_GAS": faker.random.numeric(2),
    "RANDOM_ELECTRICY": faker.random.numeric(2),
    "RANDOM_FUEL_OIL": faker.random.numeric(2),
    "RANDOM_PROPANE": faker.random.numeric(2),
    "THERMOSTAT_SUMMER": "78",
    "THERMOSTAT_WINTER": "68",
    "LIGHTS": faker.random.numeric(2),
    "GREEN_POWER": faker.random.numeric(1, 10),
    "COLD_WATER": faker.random.numeric(1, 10),
    "LOADS_PER_WEEK": faker.random.numeric(1, 10),
    "VEHICLE_MILES": "12000",
    "GALES_MILES": "24000",
    "REDUCE_MILES": "100",
    "REPLACE_VEHICLE": "1000",

}

export default CarbonFootprintCalculatorModel




