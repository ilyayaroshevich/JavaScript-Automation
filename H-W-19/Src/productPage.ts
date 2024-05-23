import { WebDriver, By, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class ProductPage extends BasePage {
    addToCart: string;
    sideBar: string;
    productIsAdded: string;
    headphonesAfterAdded: string;
    moveToCart: string;
    continueToBuy: string;
    recommendedToBuy: string;
    constructor(driver: WebDriver) {
        super(driver)
        this.addToCart = "//a[@data-shop-id='1689' and text()='В корзину']";
        this.sideBar = "//div[@class='product-recommended__sidebar-overflow']";
        this.productIsAdded = "//div[contains(text(),'Товар добавлен в корзину')]";
        this.headphonesAfterAdded = "//div[contains(text(),'Наушники Marshall Major IV (черный)')]";
        this.moveToCart = "//a[contains(text(),'Перейти в корзину')]";
        this.continueToBuy = "//a[contains(text(),'Продолжить покупки')]";
        this.recommendedToBuy = "//span[contains(text(),'Рекомендуем купить в магазине')]";



    }
    async findAndClickOnAddToCartButton() {
        const addToCartButton = await this.driver.findElement(By.xpath(this.addToCart));
        await this.driver.wait(until.elementIsVisible(addToCartButton), 10000);
        await addToCartButton.click();
    }
    async waitSideBarAfterAddedToCart() {
        await this.driver.wait(until.elementLocated(By.xpath(this.sideBar)), 30000, 'Timed out after 30 sec', 1000);
    }

    async findAndGetTextProductIsAddedOnSideBar() {
        const productIsAddedText = await this.driver.findElement(By.xpath(this.productIsAdded));
        return productIsAddedText.getText();
    }

    async findAndDisplayingNameOfHeadphones() {
        const headphonesTextAfterAddedToCart = await this.driver.findElement(By.xpath(this.headphonesAfterAdded));
        await headphonesTextAfterAddedToCart.isDisplayed();
    }

    async findAndDisplayingMoveToCartButton() {
        const moveToCartButton = await this.driver.findElement(By.xpath(this.moveToCart));
        await moveToCartButton.isDisplayed();
    }

    async findAndDisplayingContinueToBuyButton() {
        const continueBuyButton = await this.driver.findElement(By.xpath(this.continueToBuy));
        await continueBuyButton.isDisplayed();
    }

    async findAndDisplayingRecommendedToButPopup() {
        const recommendedToBuyPopup = await this.driver.findElement(By.xpath(this.recommendedToBuy));
        await recommendedToBuyPopup.isDisplayed();
    }
}