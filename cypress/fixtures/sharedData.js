import TestPage from "../pageObjects/testPage";

class SharedMethods {

    testPage = new TestPage;
    
    checkThatExpectedMedianValuesAreContainInTheResultValue(enteredValue, expectedValue) {
        this.testPage.getTheResultValue().then((x) => {
            let returnedValue = (x.text().split(":")[1]).trim();
            expect(returnedValue).to.contain(expectedValue);
            cy.fixture("values.json").then((data) => {
                cy.request(data.serverUrl + "api/" + enteredValue).its('status').should('eq',200)
            });
        })
        
    }

}

export default SharedMethods;