import { WebDriver } from "selenium-webdriver";

export default class BasePage {
    mainURL: string;
    constructor(protected driver: WebDriver) {
        this.mainURL = "https://www.onliner.by/";
    }

    async getCurrentUrlValue() {
        return await this.driver.getCurrentUrl()
    }

    async closeBrowser() {
        return await this.driver.quit()
    }

    async closeBrowserTab() {
        return await this.driver.close()
    }

    async maximizeWindow() {
        return await this.driver.manage().window().maximize();
    }

    async getUrl() {
        return await this.driver.get(this.mainURL);
    }

}