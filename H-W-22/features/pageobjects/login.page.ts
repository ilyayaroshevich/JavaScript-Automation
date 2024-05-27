import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';

class LoginPage extends BasePage {
        constructor() {
          super();
        }

    public get inputLogin() {
        return $('#passp-field-login');
    };

    public get loginButton() {
        return $("button[id='passp:sign-in']");
    };
    
    public get emailButton() {
        return $('button[class$="Button2_view_default"]');
    };

    async inputLoginFieldIsDisplayed() {
        const loginField = await this.inputLogin;
        const loginFieldIsDisplayed = await loginField.isDisplayed();
        return loginFieldIsDisplayed;
    };

    async loginButtonIsDisplayed() {
        const loginButton = await this.loginButton;
        const loginButtonIsDisplayed = await loginButton.isDisplayed();
        return loginButtonIsDisplayed;
    };

    async emailButtonIsDIsplayed() {
        const emailButton = await this.emailButton;
        const emailButtonIsDisplayed = await emailButton.isDisplayed();
        return emailButtonIsDisplayed;
    };
};

export default /*new*/ LoginPage;
//For PageFactory