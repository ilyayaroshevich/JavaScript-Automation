import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class LoginPage extends BasePage {
    loginOnLoginPage: string;
    emailErrorOnLoginPage: string;
    passwordErrorOnLoginPage: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.loginOnLoginPage = "//button[@class='auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full']";
        this.emailErrorOnLoginPage = "//div[contains(text(),'Укажите ник')]";
        this.passwordErrorOnLoginPage = "//div[contains(text(),'Укажите пароль')]";
    }
    async findAndClickOnLoginButton() {
        const buttonToLogin = await this.driver.findElement(By.xpath(this.loginOnLoginPage));
        await buttonToLogin.click();
    }

    async waitEmailErrorAndCheckTextOfError() {
        await this.driver.wait(until.elementLocated(By.xpath(this.emailErrorOnLoginPage)), 30000, 'Timed out after 30 sec', 1000);
        const errorEmail = await this.driver.findElement(By.xpath(this.emailErrorOnLoginPage));
        const textErrorEmail = await errorEmail.getText();
        return textErrorEmail;

    }

    async waitPasswordErrorAndCheckTextOfError() {
        await this.driver.wait(until.elementLocated(By.xpath(this.passwordErrorOnLoginPage)), 30000, 'Timed out after 30 sec', 1000);
        const errorPassword = await this.driver.findElement(By.xpath(this.passwordErrorOnLoginPage));
        const textErrorPassword = await errorPassword.getText();
        return textErrorPassword;

    }

}