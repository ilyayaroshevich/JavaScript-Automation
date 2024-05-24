import { WebDriver } from "selenium-webdriver";
import driver from "../../driver";

export default class BasePage {
    colorOfSelectedButton: string;
    private static instance: BasePage;
    protected constructor(protected driver: WebDriver) {
        this.colorOfSelectedButton = "rgba(225, 225, 225, 1)";

    };

    async getCurrentUrlValue() {
        return await this.driver.getCurrentUrl();
    };

    async closeBrowser() {
        await this.driver.quit();
    };

    async closeBrowserTab() {
        await this.driver.close();
    };

    async maximizeWindow() {
        await this.driver.manage().window().maximize();
    };

    static getInstance() {
        if(!this.instance) {
            this.instance = new BasePage(driver)
        };
        return this.instance;
    };

}