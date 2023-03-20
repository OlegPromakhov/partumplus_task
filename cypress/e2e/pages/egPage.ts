export class EgPage {
    elements = {
        homeBtn : () => cy.get('header .btn'),
        dropdown : () => cy.get('#dropdown-class-example'),
        imgUpload : () => cy.get('input[name="img"]'),
        uploadedImg : () => cy.get('.image-upload-wrapper img'),
        newTabBtn : () => cy.get('button#opentab'),
        nameField : () => cy.get('input#name'),
        alertBtn : () => cy.get('#alertbtn'),
        hideBtn : () => cy.get('#hide-textbox'),
        showBtn : () => cy.get('#show-textbox'),
        exampleInputField : () => cy.get('input#displayed-text'),
        hoverBtn : () => cy.get('button.hover-btn'),
        hoverMenu : () => cy.get('.hover-container .hover-content'),
        iFrame : () => cy.get('#courses-iframe')
    };

    openPage() {
        cy.visit(Cypress.env('indexUrl'));
        return this
    }
    verifyPageOpened(title : string) {
        cy.title().should('include', title);
        return this
    }
    verifyHomeBtn() {
        this.elements.homeBtn().parent()
            .should('have.attr', 'href')
            .and('include', 'easygenerator.com');
        return this
    }
    verifyDropdown() {
        this.elements.dropdown().find('option').should('not.have.length', 0);
        this.elements.dropdown().select('Option2')
            .invoke('val').should('deep.equal', 'option2');
        return this
    }
    uploadImg(path : string) {
        this.elements.imgUpload().selectFile(path);
        return this
    }
    verifyImgDisplayed() {
        this.elements.uploadedImg().should('be.visible');
        return this
    }
    verifyNewTab() {
        // this.elements.newTabBtn().invoke('removeAttr', 'target').click();
        // cy.url().should('include', 'easygenerator.com');
        this.elements.newTabBtn().should('have.attr', 'target', '_blank');
        return this
    }
    inputAlertText(text) {
        this.elements.nameField().type(text);
        return this
    }
    clickAlertBtn() {
        this.elements.alertBtn().click();
        return this
    }
    verifyAlertTxt(text) {
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains(text);
        });
        return this
    }
    clickHideBtn() {
        this.elements.hideBtn().click();
        return this
    }
    clickShowBtn() {
        this.elements.showBtn().click();
        return this
    }
    textBoxVisible(b: boolean) {
        if (b == true) {
            this.elements.exampleInputField().should('be.visible');
        } else {
            this.elements.exampleInputField().should('not.be.visible')
        }
        return this
    }
    verifyHoverBtn() {
        this.elements.hoverBtn().trigger('mouseover');
        this.elements.hoverMenu().children().contains('Top').should('be.visible');
        this.elements.hoverMenu().children().contains('Reload').should('be.visible');
        return this
    }
    verifyHoverMenu() {
        this.elements.hoverMenu().children().contains('Top').click({ force: true });
        cy.url().should('include', '#top');
        this.elements.hoverMenu().children().contains('Reload').click({ force: true });
        cy.url().should('not.include', '#top');
        return this
    }
    verifyIFrame() {
        this.elements.iFrame().should('be.visible')
            .and('not.be.empty');
        return this
    }
}