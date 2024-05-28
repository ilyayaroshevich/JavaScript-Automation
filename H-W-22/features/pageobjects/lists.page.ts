import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';
import headerPage from './header.page.ts';

class ListsPage extends BasePage {
    constructor() {
        super();
      };
    get listsPageUrl() { return 'https://www.kinopoisk.ru/lists/categories/movies/3/' };

    get top250Series() { return $("[href$='series-top250/']") };

    get listsTitle() { return $("h1[class='styles_title__ZBCLA']") };

    get listsText() { return "Списки" };

    get serialButton() {
        return $("div[class$='ly3pq'] > a[href$='/3/']");
    };

    public open() {
        return browser.url(`https://www.kinopoisk.ru/lists/categories/movies/1/`);
    };

    // async getTextFromListsTitle() {
    //     return await this.listsTitle.getText();
    // };

    async getCssPropertyFromSerialButton() {
        return await this.serialButton.getCSSProperty('background');
    };

};

export default new ListsPage;
