import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';
import headerPage from './header.page.ts';


class ListsPage extends BasePage {

    get listsPageUrl() { return 'https://www.kinopoisk.ru/lists/categories/movies/3/' };

    get top250Button() { return $("[href$='series-top250/']") }

    public open() {
        return browser.url(`https://www.kinopoisk.ru/lists/categories/movies/1/`)
    }

    get Lists() { return $("h1[class='styles_title__ZBCLA']") }

    get ListsText() { return "Списки" }

    get SerialButton() {
        return $("div[class$='ly3pq'] > a[href$='/3/']")
    }

    async clickOnTop250Series() {
        const top250SeriesButton = await this.top250Button;
        await top250SeriesButton.waitForDisplayed();
        await top250SeriesButton.click();
    }

    async getTextFromListsTitle() {
        const textOfTitleLists = (await this.Lists).getText();
        return textOfTitleLists;
    }

    async serialButtonIsDisplayed() {
        const serialButton = (await this.SerialButton).isDisplayed();
        return serialButton;
    }

    async getCssPropertyFromSerialButton() {
        const CssPropertyOfSerialButton = (await this.SerialButton).getCSSProperty('background');
        return CssPropertyOfSerialButton;
    }

}

export default new ListsPage();
