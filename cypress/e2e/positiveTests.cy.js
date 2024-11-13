/*
Submitted by Moran Liv.
Email: moran.liv2006@gmail.com
Phone: 672-963-6730
*/

import { assert } from "chai";
import TestPage from "../pageObjects/testPage";
import SharedData from "../fixtures/sharedData";

describe("Honeywell BrokerBay Median-Prime-Numbers Cypress Challenge - positive test cases", () => {

    const testPage = new TestPage;
    const sharedData = new SharedData;

    beforeEach(() => {
        //Before every test navigate to the server url
        //The server url is stored in the value.json file inside the 'fixture' section.
        cy.fixture("values.json").then((data) => {
            cy.visit(data.serverUrl)
        });

        //Verify the test page loaded properly by checking if the "h1" title is visible and has the correct text
        testPage.getH1Title().should("be.visible").then((x) => assert.equal(x.text(), "Enter a number to get the median of primes:"))
    })

    it("Verify median number is presented when typing the smallest prime number that has a median - 3", () => {
        let value = 3;

        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        sharedData.checkThatExpectedMedianValuesAreContainInTheResultValue(value, "2");
    })

    it("Verify median number is presented when typing a prime value that has 2 medians", () => {
        let value = 5;

        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        sharedData.checkThatExpectedMedianValuesAreContainInTheResultValue(value, "2,3");
    })

    it("Verify median number is presented when typing 2 digits prime value", () => {
        let value = 13;

        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        sharedData.checkThatExpectedMedianValuesAreContainInTheResultValue(value, "5");
    })

    it("Verify the application shows the correct results when submitting 2 close number when one of them is prime and the second isn't a prime number, such as 4 and 5", () => {
        let value = 4;
        const expectedResult = "2,3";

        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        sharedData.checkThatExpectedMedianValuesAreContainInTheResultValue(value, expectedResult);

        value = 5
        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        sharedData.checkThatExpectedMedianValuesAreContainInTheResultValue(value, expectedResult);
    })

    it("Verify median number is presented when typing 2 digits non prime value", () => {
        let value = 16;

        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        sharedData.checkThatExpectedMedianValuesAreContainInTheResultValue(value, "5,7");
    })

    it("Verify that the application works good after writing and changing non numeric value", () => {
        let charValue = "abc";
        cy.get(testPage.input_numbersInput).type(charValue).should("not.have.value", charValue);

        let value = 16;

        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        sharedData.checkThatExpectedMedianValuesAreContainInTheResultValue(value, "5,7");
    })

    it("Verify that the application works good when submitting a decimal number", () => {
        let value = 9.5;

        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        sharedData.checkThatExpectedMedianValuesAreContainInTheResultValue(value, "3,5");
    })

    it("Verify the application can stand with lots of requests", () => {
        for (let i = 1; i < 35; i++) {
            testPage.writeValueInTheInputField(i);
            testPage.clickOnTheSubmitButton();
        }
    })

})