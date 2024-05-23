import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class ProductPage extends BasePage {
    buyNowButton: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.buyNowButton = "//a[@href='https://cart.onliner.by/?action=buyNow&shopId=1689&productKey=majorivbtblk&productId=2202506&positionId=1689:874391&deliveryType=courier']";
    };
    async clickOnBuyNowButton() {
        await this.driver.wait(until.elementLocated(By.xpath(this.buyNowButton)));
        const buyNowButton = await this.driver.findElement(By.xpath(this.buyNowButton));
        await this.driver.wait(until.elementIsVisible(buyNowButton), 10000);
        await buyNowButton.click();
    };
};