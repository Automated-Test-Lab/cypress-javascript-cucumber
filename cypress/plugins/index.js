const fs = require('fs-extra');
const pg = require("pg");
const path = require('path');
const tedious = require('tedious');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = (on, config) => {
  const bundler = createBundler({ plugins: [createEsbuildPlugin(config)], });
  
  on("file:preprocessor", bundler);
  addCucumberPreprocessorPlugin(on, config);
  //Connects to an env db and fetches query result
 
  on("task", {
    DATABASE ({ dbConfig, query, values }) {
      const pool = new pg.Pool(dbConfig);
      try {
          return pool.query(query, values)
      } catch (e) {
      }
    }
  });
    function getConfigurationByFile() {
        const pathToConfigFile = path.resolve("./", `cypress.env.json`);
        return fs.readJson(pathToConfigFile);
    }
    
    allureWriter(on, config);

    return getConfigurationByFile(), config;
  };