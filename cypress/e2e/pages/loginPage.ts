export class LoginPage {
    elements = {
        emailInput : () => cy.get('#input-36'),
        passwordInput : () => cy.get('#input-37'),
        submitBtn : () => cy.get('button.primary'),
        validationErrorTxt : () => cy.get('.v-messages__message')
    };

    openPage() {
        cy.visit(Cypress.env('indexUrl'));
        return this
    }
    verifyPageOpened(title : string) {
        cy.title().should('include', title);
        return this
    }
    inputEmail(email) {
        this.elements.emailInput().type(email);
        return this
    }
    inputPassword(password) {
        this.elements.passwordInput().type(password);
        return this
    }
    clickSubmit() {
        this.elements.submitBtn().click();
        return this
    }
    verifyValidation(validationMessage) {
        this.elements.validationErrorTxt().contains(validationMessage).should('be.visible');
        return this
    }
}