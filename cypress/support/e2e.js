import './commands'

require('cypress-xpath')
require('@shelex/cypress-allure-plugin')
require('cypress-plugin-tab')

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-testid', 'id', 'class', 'attributes']
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('Unexpected token')) {
      return false
    }

    if(err.message.includes('uncaught:exception')){
      return false
    }
  })

 Cypress.on('window:before:load', window => {
    Object.defineProperty(window.navigator, 'language', { value: Cypress.env('language') });
  });