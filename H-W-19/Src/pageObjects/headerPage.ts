import { By, WebDriver } from "selenium-webdriver";
import BasePage from "./basePage";

export default class HeaderPage extends BasePage {
    catalogInHeader: string;
    loginOnMain: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.catalogInHeader = "//span[text()='Каталог' and @class = 'b-main-navigation__text']";
        this.loginOnMain = "//div[@class = 'auth-bar__item auth-bar__item--text']";

    }

    async findAndClickOnCatalogElementInHeader() {
        const catalogButtonInHeader = await this.driver.findElement(By.xpath(this.catalogInHeader));
        await catalogButtonInHeader.click();
    }

    async moveToLoginPage() {
        const loginButton = await this.driver.findElement(By.xpath(this.loginOnMain));
        await loginButton.click();
    }

}