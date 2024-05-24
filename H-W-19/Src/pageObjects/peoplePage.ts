import { WebDriver, By } from "selenium-webdriver";
import BasePage from "./basePage";
import driver from "../../driver";


export default class PeoplePage extends BasePage {
   selectedPeopleButton: string;
   peopleHeader: string;
   allNewsText: string;
   // private static instance: PeoplePage;
   /*protected*/ constructor(driver: WebDriver) {
      super(driver);
      this.selectedPeopleButton = "//a[contains(@class,'project-navigation') and contains(@href,'people')]";
      this.peopleHeader = "//div[@class='news-header__title']";
      this.allNewsText = "Все новости";
   };

   async getCssValueFromPeopleButton() {
      const selectedPeopleButton = await this.driver.findElement(By.xpath(this.selectedPeopleButton));
      const cssValueOfPeopleButton = await selectedPeopleButton.getCssValue("background-color");
      return cssValueOfPeopleButton;
   };

   async getTextFromPeopleHeader() {
      const peopleLinkHeader = await this.driver.findElement(By.xpath(this.peopleHeader));
      const textPeopleHeader = await peopleLinkHeader.getText();
      return textPeopleHeader;
   };

   // static getInstance() {
   //    if (!this.instance) {
   //       this.instance = new PeoplePage(driver)
   //    };
   //    return this.instance;
   // };
};