import { $ } from '@wdio/globals'
import BasePage from './basePage';


class ListsPage extends BasePage {

    get listsPageUrl() { return 'https://www.kinopoisk.ru/lists/categories/movies/3/' };

    get top250Button() { return $("[href$='series-top250/']") }

    public open() {
        return browser.url(`https://www.kinopoisk.ru/lists/categories/movies/1/`)
    }
}

export default new ListsPage();
