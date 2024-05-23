import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class HomePage extends BasePage {
    searchFieldOnMain: string;
    fastSearchModal: string;
    peopleElement: string;
    peopleSectionsURL: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.searchFieldOnMain = "//input[@class='fast-search__input']";
        this.fastSearchModal = "//div[@id='fast-search-modal']";
        this.peopleElement = "//header[@class='b-main-page-blocks-header-2 cfix']//a[@href='https://people.onliner.by']";
        this.peopleSectionsURL = "https://people.onliner.by/";

    }

    async findSearchFieldEnterValueAndFindFastSearchPopup() {
        const searchFieldInput = await this.driver.findElement(By.xpath(this.searchFieldOnMain));
        await searchFieldInput.sendKeys('iPhone');
        const fastSearchPopup = await this.driver.findElement(By.xpath(this.fastSearchModal));
        const searchFieldInputIsDisplayed = await fastSearchPopup.isDisplayed();
        return searchFieldInputIsDisplayed;
    }

    async findAndClickOnPeopleElementAndWaitUrl() {
        const peopleLink = await this.driver.findElement(By.xpath(this.peopleElement));
        await peopleLink.click();
        await this.driver.wait(until.urlIs(this.peopleSectionsURL), 30000, 'Timed out after 30 sec', 1000);
    }


}