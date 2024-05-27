import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';
import headerPage from './header.page.ts';

class ListsPage extends BasePage {
    constructor() {
        super();
      };
    get listsPageUrl() { return 'https://www.kinopoisk.ru/lists/categories/movies/3/' };

    get top250SeriesButton() { return $("[href$='series-top250/']") };

    get listsTitle() { return $("h1[class='styles_title__ZBCLA']") };

    get listsText() { return "Списки" };

    get serialButton() {
        return $("div[class$='ly3pq'] > a[href$='/3/']");
    };

    public open() {
        return browser.url(`https://www.kinopoisk.ru/lists/categories/movies/1/`);
    };

    async clickOnTop250SeriesButton() {
        const top250SeriesButton = await this.top250SeriesButton;
        await top250SeriesButton.waitForDisplayed();
        await top250SeriesButton.click();
    };

    async getTextFromListsTitle() {
        const textOfTitleLists = (await this.listsTitle).getText();
        return textOfTitleLists;
    };

    async serialButtonIsDisplayed() {
        const serialButton = (await this.serialButton).isDisplayed();
        return serialButton;
    };

    async getCssPropertyFromSerialButton() {
        const CssPropertyOfSerialButton = (await this.serialButton).getCSSProperty('background');
        return CssPropertyOfSerialButton;
    };

};

export default /*new*/ ListsPage;
//PageFactory