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


    async enterFilmName(film_name) {
        await this.searchField.waitForClickable({ timeout: 50000 });
        await this.searchField.click();
        await this.searchField.setValue(film_name);
    };
};

export default new HeaderPage;
