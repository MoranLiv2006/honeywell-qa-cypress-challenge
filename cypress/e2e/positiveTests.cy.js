/*
Submitted by Moran Liv.
Email: moran.liv2006@gmail.com
Phone: 672-963-6730
*/

import { assert } from "chai";
import TestPage from "../pageObjects/testPage";

describe("Honeywell BrokerBay Median-Prime-Numbers Cypress Challenge - positive test cases", () => {

    const serverUrl = "http://localhost:3000/";
    const testPage = new TestPage;

    beforeEach(() => {
        //Before every test navigate to the server url
        cy.visit(serverUrl);

        //Verify the test page loaded properly by checking if the "h1" title is visible and has the correct text
        testPage.getH1Title().should("be.visible").then((x) => assert.equal(x.text(), "Enter a number to get the median of primes:"))
    })

    it("Verify median number is presented when typing the smallest prime number that has a median - 3", () => {
        let value = 3;

        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        testPage.getTheResultValue().then((x) => {
            let returnedValue = (x.text().split(":")[1]).trim();
            expect(returnedValue).to.contain("2")
        })
    })

    it("Verify median number is presented when typing a value that has 2 medians", () => {
        let value = 4;

        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        testPage.getTheResultValue().then((x) => {
            let returnedValue = (x.text().split(":")[1]).trim();
            expect(returnedValue).to.contain("2,3")
        })
    })

    it("Verify median number is presented when typing 2 digits value", () => {
        let value = 10;

        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        testPage.getTheResultValue().then((x) => {
            let returnedValue = (x.text().split(":")[1]).trim();
            expect(returnedValue).to.contain("3,5")
        })
    })

})