/*
Submitted by Moran Liv.
Email: moran.liv2006@gmail.com
Phone: 672-963-6730
*/

import TestPage from "../pageObjects/testPage";
import SharedData from "../fixtures/sharedData";

describe("Honeywell BrokerBay Median-Prime-Numbers Cypress Challenge - negative test cases", () => {

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

    it("Try to submit a negative number and verify there are no results", () => {
        let value = -5;
        testPage.writeValueInTheInputField(value);
        testPage.clickOnTheSubmitButton();
        sharedData.checkThatExpectedMedianValuesAreContainInTheResultValue(value, ",")


    })

    it("Try to submit non numeric value", () => {
        let charValue = "abc";
        cy.get(testPage.input_numbersInput).type(charValue).should("not.have.value", charValue);
    })

    it("Try to submit very big value and verify alert message", () => {
        testPage.writeValueInTheInputField(999999999999999999999);
        testPage.clickOnTheSubmitButton();
        cy.on("window:alert", (alertText) => {
            assert.equal(alertText, "Number exceeds limit");
        })
    })

    it("Try to reach to unknown url suffix", () => {
        cy.fixture("values.json").then((data) => {
            cy.request({url: data.serverUrl + "api/", failOnStatusCode: false}).its('status').should('eq', 404)
            cy.visit(data.serverUrl + "api/", {failOnStatusCode: false})
        })
    })

})

