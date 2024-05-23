import { WebDriver } from "selenium-webdriver";

export default class BasePage {
    constructor(protected driver: WebDriver) { }

    async getCurrentUrlValue() {
        return await this.driver.getCurrentUrl()
    }

    async closeBrowser() {
        return await this.driver.quit()
    }

    async maximizeWindow() {
        return this.driver.manage().window().maximize();
    }


}