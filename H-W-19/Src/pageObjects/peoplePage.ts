import { WebDriver, By } from "selenium-webdriver";
import BasePage from "./basePage";

export default class PeoplePage extends BasePage {
   selectedPeopleButton: string;
   peopleHeader: string;
   allNewsText: string;
   constructor(driver: WebDriver) {
      super(driver);
      this.selectedPeopleButton = "//span[text()='Люди' and contains(@class,'project')]";
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
};