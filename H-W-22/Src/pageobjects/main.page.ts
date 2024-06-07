import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';

class MainPage extends BasePage {
    constructor() {
        super();
    };
    get media() { return $("[href='/media/'][class$='BSbZW']") };

    get series() { return $("[href$='/3/'][class$='BSbZW']") };

    public open() {
        return browser.url(`https://www.kinopoisk.ru/`);
    };
};

export default new MainPage;
