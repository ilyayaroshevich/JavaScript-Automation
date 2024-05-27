import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';

class HeaderPage extends BasePage {
    constructor() {
        super();
      };

    get loginButton() { return $('button[class$="LWZQp"]') };

    get searchField() { return $("input[name='kp_query']") };

    get suggestContainer() { return $('#suggest-container') };

    get searchedMovie() { return $("li[data-index='0']") };

    get onlineCinemaButton() { return $("a[class$='menu__item'][href^='https://hd.']") };

    async clickOnLoginButton() {
        const loginButton = await this.loginButton;
        await loginButton.waitForDisplayed({ timeout: 20000 });
        await loginButton.click();
    };

    async enterFilmName(film_name) {
        await this.searchField.waitForClickable({ timeout: 50000 });
        await this.searchField.click();
        await this.searchField.setValue(film_name);
    };

    async suggestionContainerIsDisplayed() {
        const suggestionContainer = await this.suggestContainer;
        await suggestionContainer.waitForDisplayed({ timeout: 50000 });
        const suggestionDropDownIsDisplayed = suggestionContainer.isDisplayed();
        return suggestionDropDownIsDisplayed;
    };

    async clickOnFirstFilmOfList() {
        const firstFilm = await this.searchedMovie;
        await browser.waitUntil(async () => {
            return await firstFilm.isDisplayed() && await firstFilm.isClickable()
        }, { timeout: 50000 });
        await firstFilm.click();
    };

    async clickOnOnlineCinemaButton() {
        const onlineCinemaButton = await this.onlineCinemaButton;
        await onlineCinemaButton.click();
    };
};

export default /*new*/ HeaderPage;
//pageFactory