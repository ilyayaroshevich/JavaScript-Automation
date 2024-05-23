import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class ProductPage extends BasePage {
    buyNow: string;
    constructor(driver: WebDriver) {
        super(driver)
        this.buyNow = "//a[@href='https://cart.onliner.by/?action=buyNow&shopId=1689&productKey=majorivbtblk&productId=2202506&positionId=1689:874391&deliveryType=courier']";
    }
    async findAndClickOnBuyNowButton() {
        await this.driver.wait(until.elementLocated(By.xpath(this.buyNow)));
        const buyNowButton = await this.driver.findElement(By.xpath(this.buyNow));
        await this.driver.wait(until.elementIsVisible(buyNowButton), 10000);
        await buyNowButton.click();
    }
    


}