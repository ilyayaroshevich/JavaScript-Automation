import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class ProductPage extends BasePage {
    buyNowButton: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.buyNowButton = "//a[@data-shop-id='1689' and @data-product-key='majorivbtblk' and contains(@class,'button-style') and text()='Купить сейчас']";
    };
    async clickOnBuyNowButton() {
        await this.driver.wait(until.elementLocated(By.xpath(this.buyNowButton)));
        const buyNowButton = await this.driver.findElement(By.xpath(this.buyNowButton));
        await this.driver.wait(until.elementIsVisible(buyNowButton), 10000);
        await buyNowButton.click();
    };
};