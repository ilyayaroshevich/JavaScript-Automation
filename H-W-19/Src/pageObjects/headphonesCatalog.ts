import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class HeadphonesCatalog extends BasePage {
    headphonesElement: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.headphonesElement = "(//a[contains(text(),'Наушники Marshall Major IV (черный)')])[1]";
    };
    async clickOnHeadphoneName() {
        const headphonesName = await this.driver.findElement(By.xpath(this.headphonesElement));
        await this.driver.wait(until.elementIsVisible(headphonesName));
        await headphonesName.click();
    };
};