#Author: talitasantos2310@gmail.com

Feature: Carbon Footprint Calculator
    As a user
    I want to fill zip code and number of people informations
    So that I can access calculator successfully

    Background: Visit home page
        Given I visited home page

    @regression
    Scenario: Access the calculator successfully
        And I fill number of people in household
        And fill valid zip code
        When click get started
        Then system returns calculator page

    @regression
    Scenario: Enter an invalid zip code
        And I fill number of people in household
        And fill invalid zip code
        When click get started
        Then system returns please please enter a valid five-digit ZIP Code message

    @regression
    Scenario: Enter a invalid number of people in household
        And fill valid zip code
        And fill invalid number of people in household
        When click get started
        Then system returns please enter a valid number of people message
