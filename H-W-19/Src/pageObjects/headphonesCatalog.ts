import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";
import driver from "../../driver";


export default class HeadphonesCatalogPage extends BasePage {
    headphonesElement: string;
    // private static instance: HeadphonesCatalogPage;

    /*protected*/ constructor(driver: WebDriver) {
        super(driver);
        this.headphonesElement = "(//a[contains(text(),'Наушники Marshall Major IV (черный)')])[1]";
    };
    async clickOnHeadphoneName() {
        const headphonesName = await this.driver.findElement(By.xpath(this.headphonesElement));
        await this.driver.wait(until.elementIsVisible(headphonesName));
        await headphonesName.click();
    };

    // static getInstance() {
    //     if (!this.instance) {
    //         this.instance = new HeadphonesCatalogPage(driver)
    //     };
    //     return this.instance;
    // };
};