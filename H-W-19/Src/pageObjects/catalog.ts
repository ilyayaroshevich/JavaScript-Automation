import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class CatalogPage extends BasePage {
    headphonesInCatalog: string;
    constructor(driver: WebDriver) {
        super(driver)
        this.headphonesInCatalog= "//a[@href = 'https://catalog.onliner.by/headphones?click_from_widget=true']";


    }
    async findAndWaitAndClickOnHeadphonesButtonInCatalog() {
        const headphonesButtonInCatalog = await this.driver.findElement(By.xpath(this.headphonesInCatalog));
        await this.driver.wait(until.elementIsVisible(headphonesButtonInCatalog));
        await headphonesButtonInCatalog.click();
    }


}