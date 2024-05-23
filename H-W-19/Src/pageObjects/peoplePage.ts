import { WebDriver, By } from "selenium-webdriver";
import BasePage from "./basePage";

export default class PeoplePage extends BasePage {
    selectedPeople: string;
    peopleHeader: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.selectedPeople = "//a[@href='https://people.onliner.by'] [@class='project-navigation__link project-navigation__link_primary']";
        this.peopleHeader = "//div[@class='news-header__title']";

     }

     async findPeopleButtonAndGetCssValue(){
        const selectedPeopleButton = await this.driver.findElement(By.xpath(this.selectedPeople));
        const cssValueOfPeopleButton = await selectedPeopleButton.getCssValue("background-color");
        return cssValueOfPeopleButton;
     }

     async findPeopleLinkAndGetText(){
        const peopleLinkHeader = await this.driver.findElement(By.xpath(this.peopleHeader));
        const textPeopleHeader = await peopleLinkHeader.getText();
        return textPeopleHeader;
     }

}