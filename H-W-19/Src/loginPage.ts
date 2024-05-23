import { WebDriver } from "selenium-webdriver";
import BasePage from "./basePage";

export default class LoginPage extends BasePage {
    constructor(driver: WebDriver) {
        super(driver)
     }

}