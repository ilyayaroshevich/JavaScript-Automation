import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";
import driver from "../../driver";


export default class CatalogPage extends BasePage {
    headphonesButton: string;
    // private static instance: CatalogPage;
    /*protected*/ constructor(driver: WebDriver) {
        super(driver);
        this.headphonesButton = "//div[contains(text(), 'Наушники') and contains(@class, 'catalog-form')]";

    };
    async clickOnHeadphonesButton() {
        const headphonesButton = await this.driver.findElement(By.xpath(this.headphonesButton));
        await this.driver.wait(until.elementIsVisible(headphonesButton));
        await headphonesButton.click();
    };

    // static getInstance() {
    //     if (!this.instance) {
    //         this.instance = new CatalogPage(driver)
    //     };
    //     return this.instance;
    // };
}

