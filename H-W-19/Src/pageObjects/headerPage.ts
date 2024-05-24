import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./basePage";
import driver from "../../driver";


export default class HeaderPage extends BasePage {
    catalogButton: string;
    loginButton: string;
    newsButton: any;
    newsDropdown: string;
    private static instance: HeaderPage;
    protected constructor(driver: WebDriver) {
        super(driver);
        this.catalogButton = "//span[text()='Каталог' and @class = 'b-main-navigation__text']";
        this.loginButton = "//div[@class = 'auth-bar__item auth-bar__item--text']";
        this.newsButton = "//span[@class='b-main-navigation__text'][text()='Новости']";
        this.newsDropdown = "//div[@class='b-main-navigation__dropdown b-main-navigation__dropdown_visible']";
    };

    async clickOnCatalogButton() {
        const catalogButton = await this.driver.findElement(By.xpath(this.catalogButton));
        await catalogButton.click();
    };

    async moveToLoginForm() {
        const loginButton = await this.driver.findElement(By.xpath(this.loginButton));
        await loginButton.click();
    };

    async hoverCursorOverNewsButton() {
        const newsButton = await this.driver.findElement(By.xpath(this.newsButton));
        const actions = this.driver.actions({ async: true });
        await actions.move({ origin: newsButton }).perform();
        await this.driver.wait(until.elementLocated(By.xpath(this.newsDropdown)), 30000, 'Timed out after 30 sec', 1000);
    };

    async isNewsDropdownIsDisplayed() {
        const newsDropdown = await this.driver.findElement(By.xpath(this.newsDropdown));
        const newsDropdownIsDisplayed = await newsDropdown.isDisplayed();
        return newsDropdownIsDisplayed;
    };

    static getInstance() {
        if (!this.instance) {
            this.instance = new HeaderPage(driver)
        };
        return this.instance;
    };
};