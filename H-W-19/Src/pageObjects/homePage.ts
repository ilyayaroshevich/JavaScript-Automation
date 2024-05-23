import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class HomePage extends BasePage {
    searchFieldOnMain: string;
    fastSearchModal: string;
    peopleElement: string;
    peopleSectionsURL: string;
    newsInHeader: any;
    newsDropdown: string;
    peopleTitle: string;
    technoTitle: string;
    carTitle: string;
    propTitle: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.searchFieldOnMain = "//input[@class='fast-search__input']";
        this.fastSearchModal = "//div[@id='fast-search-modal']";
        this.peopleElement = "//header[@class='b-main-page-blocks-header-2 cfix']//a[@href='https://people.onliner.by']";
        this.peopleSectionsURL = "https://people.onliner.by/";
        this.newsInHeader = "//span[@class='b-main-navigation__text'][text()='Новости']";
        this.newsDropdown = "//div[@class='b-main-navigation__dropdown b-main-navigation__dropdown_visible']";
        this.peopleTitle = "//a[text()='Люди'][@class='b-main-navigation__dropdown-title-link']";
        this.technoTitle = "//a[text()='Технологии'][@class='b-main-navigation__dropdown-title-link']";
        this.carTitle = "//a[text()='Авто'][@class='b-main-navigation__dropdown-title-link']";
        this.propTitle = "//a[text()='Недвижимость'][@class='b-main-navigation__dropdown-title-link']";

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

    async findNewsButtonAndHoverCursorOverIt() {
        const newsButton = await this.driver.findElement(By.xpath(this.newsInHeader));
        const actions = this.driver.actions({ async: true });
        await actions.move({ origin: newsButton }).perform();
    }

    async waitNewDropdownIsLocatedandDisplayingIt() {
        await this.driver.wait(until.elementLocated(By.xpath(this.newsDropdown)), 30000, 'Timed out after 30 sec', 1000);
        const newsDropdownPopup = await this.driver.findElement(By.xpath(this.newsDropdown));
        const newDropdownPopupIsDisplayed = await newsDropdownPopup.isDisplayed();
        return newDropdownPopupIsDisplayed;
    }
    async findPeopleLinkInDropdownAndGetText() {
        const peopleLinkInDropdown = await this.driver.findElement(By.xpath(this.peopleTitle)).getText();
        return peopleLinkInDropdown;
    }

    async findCarLinkInDropdownAndGetText() {
        const technoLinkDropdown = await this.driver.findElement(By.xpath(this.technoTitle)).getText();
        return technoLinkDropdown;
    }

    async findTechnoLinkInDropdownAndGetText() {
        const carLinkDropdown = await this.driver.findElement(By.xpath(this.carTitle)).getText();
        return carLinkDropdown;
    }

    async findPropLinkInDropdownAndGetText() {
        const propLinkDropdown = await this.driver.findElement(By.xpath(this.propTitle)).getText();
        return propLinkDropdown;
    }

}