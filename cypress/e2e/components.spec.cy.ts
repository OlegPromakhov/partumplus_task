import { EgPage } from './pages/egPage';

const egPage = new EgPage();
const txtFilePath : string = './cypress/fixtures/8-bit.png';
const pageTitle : string = 'Practice Page';

describe('Page components test', () => {
    beforeEach(() => {
        egPage.openPage();
    });
    it('Verify page is opened', () => {
        egPage.verifyPageOpened(pageTitle);
    });
    it('Verify Home button has correct link', () => {
        egPage.verifyHomeBtn();
    });
    it('Verify dropdown', () => {
        egPage.verifyDropdown();
    });
    it('Verify image uploader', () => {
        egPage.uploadImg(txtFilePath);
        egPage.verifyImgDisplayed();
    });
    it('Verify New Tab button', () => {
        egPage.verifyNewTab();
    });
    it('Verify alert', () => {
        cy.task('readTxtFile', './cypress/fixtures/alert-text.txt').then((text) => {
            egPage.inputAlertText(text);
            egPage.clickAlertBtn();
            egPage.verifyAlertTxt(text);
        });
    });
    it('Verify text box', () => {
        egPage.textBoxVisible(true);
        egPage.clickHideBtn();
        egPage.textBoxVisible(false);
        egPage.clickShowBtn();
        egPage.textBoxVisible(true);
    });
    it('Verify hover menu', () => {
        egPage.verifyHoverBtn();
        egPage.verifyHoverMenu();
    });
    it('Verify iFrame', () => {
        egPage.verifyIFrame();
    });
});
