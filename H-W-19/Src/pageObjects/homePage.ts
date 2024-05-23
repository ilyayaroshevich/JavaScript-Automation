import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./basePage";

export default class HomePage extends BasePage {
    searchField: string;
    fastSearchPopup: string;
    peopleElement: string;
    peoplePageUrl: string;
    newsButton: any;  //Можно переместить
    newsDropdown: string;
    peopleTitle: string;
    technoTitle: string;
    carTitle: string;
    propTitle: string;
    mainURL: string;
    newsTitles: { People: string; Techno: string; Car: string; Prop: string; };
    constructor(driver: WebDriver) {
        super(driver);
        this.searchField = "//input[@class='fast-search__input']";
        this.fastSearchPopup = "//div[@id='fast-search-modal']";
        this.peopleElement = "//header[@class='b-main-page-blocks-header-2 cfix']//a[@href='https://people.onliner.by']";
        this.peoplePageUrl = "https://people.onliner.by/";
        this.newsButton = "//span[@class='b-main-navigation__text'][text()='Новости']";
        this.newsDropdown = "//div[@class='b-main-navigation__dropdown b-main-navigation__dropdown_visible']";
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
        await searchFieldInput.sendKeys();
    };
    async fastSearchIsDisplayed() {
        const fastSearchPopup = await this.driver.findElement(By.xpath(this.fastSearchPopup));
        const searchFieldInputIsDisplayed = await fastSearchPopup.isDisplayed();
        return searchFieldInputIsDisplayed;
    };

    async clickOnPeopleElement() {
        const peopleElement = await this.driver.findElement(By.xpath(this.peopleElement));
        await peopleElement.click();
        await this.driver.wait(until.urlIs(this.peoplePageUrl), 30000, 'Timed out after 30 sec', 1000);
    };

    async hoverCursorOverNewsButton() {
        const newsButton = await this.driver.findElement(By.xpath(this.newsButton));
        const actions = this.driver.actions({ async: true });
        await actions.move({ origin: newsButton }).perform();
        await this.driver.wait(until.elementLocated(By.xpath(this.newsDropdown)), 30000, 'Timed out after 30 sec', 1000);
    };

    async isNewsDropdownIsDisplayed() {
        const newsDropdown = await this.driver.findElement(By.xpath(this.newsDropdown));
        const newsDropdownIsDisplayed = await newsDropdown.isDisplayed();
        return newsDropdownIsDisplayed;
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
};