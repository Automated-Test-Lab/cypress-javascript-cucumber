#Author: talitasantos2310@gmail.com

Feature: Carbon Footprint Calculator
    As a user
    I want to fill my household informations
    So that I can estimates footprint in three areas: home energy, transportation and waste.

    Background: Visit home page
        Given I visited home page
        And access the calculator successfully

    @regression
    Scenario Outline: Estimates footprint sucessfully
        And select a primary heating "<source>"
        And enter your monthly consumption in dollars
        And fill reduce your mission
        When click to continue to transportation
        Then sytem returns transportation tab
        And fill vechicle informations
        When click to continue to waste
        Then sytem returns waste tab
        And fill waste informations
        When click to continue to report
        Then system returns household carbon footprint report

        Examples:
            | source      |
            | Natural Gas |
            | Electricity |
            | Fuel Oil    |
            | Propane     |