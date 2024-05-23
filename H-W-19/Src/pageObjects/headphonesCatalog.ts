import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class HeadphonesCatalog extends BasePage {
    headphonesInCatalog: string;
    constructor(driver: WebDriver) {
        super(driver)
        this.headphonesInCatalog= "(//a[contains(text(),'Наушники Marshall Major IV (черный)')])[1]";
     }
async findAndClickOnHeadphone() {
        const headphonesLinkInCatalog = await this.driver.findElement(By.xpath(this.headphonesInCatalog));
        await this.driver.wait(until.elementIsVisible(headphonesLinkInCatalog));
        await headphonesLinkInCatalog.click();
}
}