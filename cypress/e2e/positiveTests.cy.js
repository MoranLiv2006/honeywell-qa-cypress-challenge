import TestPage from "../pageObjects/testPage";

describe("ddd", () => {

    const serverUrl = "http://localhost:3000/";
    const testPage = new TestPage;

    beforeEach(() => {
        //Before every test navigate to the server url
        cy.visit(serverUrl);

        //Verify the test page loaded properly by checking if the "h1" title is visible and has the correct text
        testPage.getH1Title().should("be.visible").then((x) => assert.equal(x.text(), "Enter a number to get the median of primes:"))
    })

    it("sdfdfggd", () => {

    })

})