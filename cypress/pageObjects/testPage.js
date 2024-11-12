class TestPage {

    txt_h1Title = "h1";
    input_numbersInput = "input";
    btn_submitButton = "button";
    txt_resultText = "h2";

    getH1Title() {
        return cy.get(this.txt_h1Title);
    }

    writeValueInTheInputField(value) {
        cy.get(this.input_numbersInput).type(value).should("have.value", value);
    }

    getTheNumbersInput() {
        return cy.get(this.input_numbersInput);
    }

    clickOnTheSubmitButton() {
        cy.get(this.btn_submitButton).click();
    }

    getTheResultValue() {
        return cy.get(this.txt_resultText).then((x) => {
            expect(x).to.contain("The median is:")
        });
    }
}
export default TestPage;