import { LoginPage } from './pages/loginPage';
const loginPage = new LoginPage();

describe('Page components test', () => {
    before(() => {
        cy.fixture('users').then((userData) => {
            this.userData = userData;
        });
        cy.fixture('messages').then((appMessages) => {
            this.appMessages = appMessages;
        });
    });
    beforeEach(() => {
			loginPage.openPage();
    });

    it('Verify page is opened', () => {
			loginPage.verifyPageOpened(this.appMessages.loginPageTitle);
    });
    it('Verify user is successfully logged in', () => {
			loginPage.inputEmail(this.userData.validEmail);
            loginPage.inputPassword(this.userData.validPassword);
            loginPage.clickSubmit();
            cy.intercept('POST', '/api/v1/sign-in', (req) => {
                expect(req.status).to.eq(201)
            })
    });
    it('Verify user is not logged in with bad credentials', () => {
            loginPage.inputEmail(this.userData.validEmail);
            loginPage.inputPassword(this.userData.invalidPassword);
            loginPage.clickSubmit();
            loginPage.verifyValidation(this.appMessages.loginValidation);
    });
});
