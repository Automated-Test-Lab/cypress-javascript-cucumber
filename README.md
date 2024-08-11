
# Automated Test Lab 🧪 | Cypress + JS + Cucumber

This project aims to provide test automation artifacts in the end-to-end layer using the Java Script language and Cypress, Cucumber framework.

## ☑️ You must have:

To execute the project you must have:

- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [Cucumber](https://cucumber.io/)
- [Allure Report](https://qameta.io/allure-report/)

## 📁 Directory structure

Using the Page Objects design pattern, which aims to separate elements into different files based on the pages on which they appear. And so, writing all the specific elements and methods of that page in your file, which is a class, and using them directly in the test scripts. We have the following directory structure in the project:

- *integration/* - contains ``.feature`` files with test scenarios written in Gherkin syntax.

- *locators/* - contains the scripts that associate expressions in the step-by-step tests with interactable elements - such as buttons, selectors, checkboxes, text fields, etc. - on the page to be navigated. 

- *messages/* - contains the messages used to validate the tests.

- *models/* - represents the structure and logic of a system's data.

- *pages/* - contains the methods that each page has and consumes the locators and models.

- *steps_definitions/* - contains the step-by-step execution scripts for the tests described in the .``feature`` files.

## How to run the project 🖥️

Clone the repository:

```bash
  git clone git@github.com:Automated-Test-Lab/cypress-javascript-cucumber.git
```

Install the dependencies:
```bash
  npm install
```

Run the tests:
```bash
  npm run test:regressive:chrome
```
## Allure Report 📊

Install allure dependencies:

```bash
  npm install -g allure-commandline --save-dev
```

To generate test reports, run the command:

```bash
  allure serve
```


## Technologies 💻

- [Node.js](https://nodejs.org/en/)
- [Cucumber](https://cucumber.io/)
- [Allure Report](https://qameta.io/allure-report/)
- [Cypress](https://www.cypress.io/)
