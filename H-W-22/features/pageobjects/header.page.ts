import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';


class HeaderPage extends BasePage {

    get loginButton() { return $('button[class$="LWZQp"]') };

    get searchField() { return $("input[name='kp_query']") };

    get firstValuesForSearch() { return 'The Simpsons' };

    get secondValuesForSearch() { return 'Green Book' };

    get thirdValuesForSearch() { return 'I Am Legend' };

    get suggestDropDown() { return $('#suggest-container') };

    get searchedMovie() { return $("li[data-index='0']") };

    get onlineCinemaButton() { return $("a[class$='menu__item'][href^='https://hd.']") }

}

export default new HeaderPage();
