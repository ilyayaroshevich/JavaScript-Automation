
import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class OrderPlacementPage extends BasePage {
    currentUrl: string;
    productNameText: string;
    productPlacementText: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.currentUrl = "https://cart.onliner.by/order";
        this.productNameText = "//div[contains(text(),'Marshall Major IV (черный)')]";
        this.productPlacementText = "//div[contains(text(),'Оформление заказа')]";
    };

    async waitUntilUrl() {
        await this.driver.wait(until.urlIs(this.currentUrl), 30000, 'Timed out after 30 sec', 1000);
    };

    async displayingProductName() {
        await this.driver.wait(until.elementLocated(By.xpath(this.productNameText)))
        const productName = await this.driver.findElement(By.xpath(this.productNameText));
        const isDisplayedProductName = await productName.isDisplayed();
        return isDisplayedProductName;
    };

    async displayingProductPlacement() {
        await this.driver.wait(until.elementLocated(By.xpath(this.productPlacementText)))
        const productPlacementText = await this.driver.findElement(By.xpath(this.productPlacementText));
        const isDisplayedProductPlacement = await productPlacementText.isDisplayed();
        return isDisplayedProductPlacement;
    };
};