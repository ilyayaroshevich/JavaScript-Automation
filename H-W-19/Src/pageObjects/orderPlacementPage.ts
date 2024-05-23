
import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class OrderPlacementPage extends BasePage {
    cartUrl: string;
    productName: string;
    productPlacement: string;
    constructor(driver: WebDriver) {
        super(driver)
        this.cartUrl = "https://cart.onliner.by/order";
        this.productName = "//div[contains(text(),'Marshall Major IV (черный)')]";
        this.productPlacement = "//div[contains(text(),'Оформление заказа')]";
    }

    async waitUntilUrl() {
        await this.driver.wait(until.urlIs(this.cartUrl), 30000, 'Timed out after 30 sec', 1000);
    }

    async findProductNameAndDisplaying() {
        await this.driver.wait(until.elementLocated(By.xpath(this.productName)))
        const productName = await this.driver.findElement(By.xpath(this.productName));
        const isDisplayedProductName = await productName.isDisplayed();
        return isDisplayedProductName;
    }

    async findAndDisplayingProductPlacement() {
        await this.driver.wait(until.elementLocated(By.xpath(this.productPlacement)))
        const productPlacementElement = await this.driver.findElement(By.xpath(this.productPlacement));
        const isDisplayedProductPlacement = await productPlacementElement.isDisplayed();
        return isDisplayedProductPlacement;
    }
}