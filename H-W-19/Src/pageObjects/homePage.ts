import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./basePage";
import driver from "../../driver";


export default class HomePage extends BasePage {
    searchField: string;
    fastSearchModal: string;
    peopleElement: string;
    peoplePageUrl: string;
    peopleTitle: string;
    technoTitle: string;
    carTitle: string;
    propTitle: string;
    mainURL: string;
    newsTitles: { People: string; Techno: string; Car: string; Prop: string; };
    // private static instance: HomePage;
    /*protected*/ constructor(driver: WebDriver) {
        super(driver);
        this.searchField = "//input[@class='fast-search__input']";
        this.fastSearchModal = "//div[@id='fast-search-modal']/*[@class='modal-dialog']";
        this.peopleElement = "//header[@class='b-main-page-blocks-header-2 cfix']//a[@href='https://people.onliner.by']";
        this.peoplePageUrl = "https://people.onliner.by/";
        this.peopleTitle = "//a[text()='Люди'][@class='b-main-navigation__dropdown-title-link']";
        this.technoTitle = "//a[text()='Технологии'][@class='b-main-navigation__dropdown-title-link']";
        this.carTitle = "//a[text()='Авто'][@class='b-main-navigation__dropdown-title-link']";
        this.propTitle = "//a[text()='Недвижимость'][@class='b-main-navigation__dropdown-title-link']";
        this.mainURL = "https://www.onliner.by/";
        this.newsTitles =
        {
            People: "Люди",
            Techno: "Технологии",
            Car: "Авто",
            Prop: "Недвижимость",
        };
    };

    async enterValueInSearchField() {
        const searchFieldInput = await this.driver.findElement(By.xpath(this.searchField));
        await searchFieldInput.sendKeys('iPhone');
    };
    async fastSearchIsDisplayed() {
        await this.driver.wait(until.elementLocated(By.xpath(this.fastSearchModal)), 30000, 'Timed out after 30 sec', 1000);
        const fastSearchPopup = await this.driver.findElement(By.xpath(this.fastSearchModal));
        const searchFieldInputIsDisplayed = await fastSearchPopup.isDisplayed();
        return searchFieldInputIsDisplayed;
    };

    async clickOnPeopleElement() {
        const peopleElement = await this.driver.findElement(By.xpath(this.peopleElement));
        await peopleElement.click();
        await this.driver.wait(until.urlIs(this.peoplePageUrl), 20000, 'Timed out after 30 sec', 1000);
    };

    async getPeopleText() {
        const peopleLinkInDropdown = await this.driver.findElement(By.xpath(this.peopleTitle)).getText();
        return peopleLinkInDropdown;
    };

    async getTechnoText() {
        const technoLinkDropdown = await this.driver.findElement(By.xpath(this.technoTitle)).getText();
        return technoLinkDropdown;
    };

    async getCarText() {
        const carLinkDropdown = await this.driver.findElement(By.xpath(this.carTitle)).getText();
        return carLinkDropdown;
    };

    async getPropText() {
        const propLinkDropdown = await this.driver.findElement(By.xpath(this.propTitle)).getText();
        return propLinkDropdown;
    };

    async getUrl() {
        return await this.driver.get(this.mainURL);
    };

    // static getInstance() {
    //     if (!this.instance) {
    //         this.instance = new HomePage(driver)
    //     };
    //     return this.instance;
    // };
};