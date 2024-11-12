class TestPage {

    txt_h1Title = "h1";
    input_numbersInput = "input";
    btn_submitButton = "button";

    getH1Title() {
        return cy.get(this.txt_h1Title);
    }

    writeValueInTheInputField(value) {
        cy.get(this.input_numbersInput).type(value);
    }

    clickOnTheSubmitButton() {
        cy.get(this.btn_submitButton).click();
    }
}
export default TestPage;