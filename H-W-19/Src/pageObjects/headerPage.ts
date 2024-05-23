import { By, WebDriver } from "selenium-webdriver";
import BasePage from "./basePage";

export default class HeaderPage extends BasePage {
    catalogButton: string;
    loginButton: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.catalogButton = "//span[text()='Каталог' and @class = 'b-main-navigation__text']";
        this.loginButton = "//div[@class = 'auth-bar__item auth-bar__item--text']";
    };

    async clickOnCatalogButton() {
        const catalogButton = await this.driver.findElement(By.xpath(this.catalogButton));
        await catalogButton.click();
    };

    async moveToLoginForm() {
        const loginButton = await this.driver.findElement(By.xpath(this.loginButton));
        await loginButton.click();
    };
};