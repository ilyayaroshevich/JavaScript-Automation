import { By, WebDriver } from "selenium-webdriver";
import BasePage from "./basePage";

export default class HomePage extends BasePage {
    searchFieldOnMain: string;
    fastSearchModal: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.searchFieldOnMain = "//input[@class='fast-search__input']";
        this.fastSearchModal = "//div[@id='fast-search-modal']";
    }

    async findSearchFieldEnterValueAndFindFastSearchPopup() {
        const searchFieldInput = await this.driver.findElement(By.xpath(this.searchFieldOnMain));
        await searchFieldInput.sendKeys('iPhone');
        const fastSearchPopup = await this.driver.findElement(By.xpath(this.fastSearchModal));
        const searchFieldInputIsDisplayed = await fastSearchPopup.isDisplayed();
        return searchFieldInputIsDisplayed;
    }



}