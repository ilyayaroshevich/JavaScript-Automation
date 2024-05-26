import { $ } from '@wdio/globals'
import BasePage from './basePage';


class LoginPage extends BasePage {


    public get inputLogin() {
        return $('#passp-field-login');
    }

    public get loginButton() {
        return $("button[id='passp:sign-in']");
    }

    public get emailButton() {
        return $('button[class$="Button2_view_default"]');
    }

}

export default new LoginPage();
