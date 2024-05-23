import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class CatalogPage extends BasePage {
    headphonesButton: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.headphonesButton= "//a[@href = 'https://catalog.onliner.by/headphones?click_from_widget=true']";

    };
    async clickOnHeadphonesButton() {
        const headphonesButton = await this.driver.findElement(By.xpath(this.headphonesButton));
        await this.driver.wait(until.elementIsVisible(headphonesButton));
        await headphonesButton.click();
    };
};