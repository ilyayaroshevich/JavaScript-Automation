import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class LoginPage extends BasePage {
    loginButton: string;
    emailErrorText: string;
    passwordErrorText: string;
    emailError: string;
    passwordError: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.loginButton = "//button[@class='auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full']";
        this.emailErrorText = "//div[contains(text(),'Укажите ник')]";
        this.passwordErrorText = "//div[contains(text(),'Укажите пароль')]";
        this.emailError = "Укажите ник или e-mail";
        this.passwordError = "Укажите пароль";
    };

    async clickOnLoginButton() {
        const buttonToLogin = await this.driver.findElement(By.xpath(this.loginButton));
        await buttonToLogin.click();
    };

    async getTextEmailError() {
        await this.driver.wait(until.elementLocated(By.xpath(this.emailErrorText)), 30000, 'Timed out after 30 sec', 1000);
        const errorEmail = await this.driver.findElement(By.xpath(this.emailErrorText));
        const textErrorEmail = await errorEmail.getText();
        return textErrorEmail;
    };

    async getTextPasswordError() {
        await this.driver.wait(until.elementLocated(By.xpath(this.passwordErrorText)), 30000, 'Timed out after 30 sec', 1000);
        const errorPassword = await this.driver.findElement(By.xpath(this.passwordErrorText));
        const textErrorPassword = await errorPassword.getText();
        return textErrorPassword;
    };
};