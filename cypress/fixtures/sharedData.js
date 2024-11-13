import TestPage from "../pageObjects/testPage";

class SharedMethods {

    testPage = new TestPage;
    
    checkThatExpectedMedianValuesAreContainInTheResultValue(enteredValue, expectedValue) {
        this.testPage.getTheResultValue().then((x) => {
            let returnedValue = (x.text().split(":")[1]).trim();
            expect(returnedValue).to.contain(expectedValue);
            cy.fixture("values.json").then((data) => {
                cy.request("GET", data.serverUrl + "api/" + enteredValue).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property("median");
                    expect((response.body.median).toString()).to.contain(expectedValue);
                });
            });
        })
    }
}
export default SharedMethods;