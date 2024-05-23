import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";
import driver from "../../driver";


export default class ProductPage extends BasePage {
    buyNowButton: string;
    // private static instance: ProductPage;
    /*protected*/ constructor(driver: WebDriver) {
        super(driver);
        this.buyNowButton = "//a[@href='https://cart.onliner.by/?action=buyNow&shopId=707&productKey=majorivbtblk&productId=2202506&positionId=707:2202506001&deliveryType=courier']";
    };
    async clickOnBuyNowButton() {
        await this.driver.wait(until.elementLocated(By.xpath(this.buyNowButton)));
        const buyNowButton = await this.driver.findElement(By.xpath(this.buyNowButton));
        await buyNowButton.click();
    };

    // static getInstance() {
    //     if (!this.instance) {
    //         this.instance = new ProductPage(driver)
    //     };
    //     return this.instance;
    // };
};