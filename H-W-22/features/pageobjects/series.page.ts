import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';


class SeriesPage extends BasePage {

    get top250SeriesUrl() {
        return 'https://www.kinopoisk.ru/lists/movies/series-top250/'
    }

    get top250seriesText() {
        return $("[class='styles_title__jB8AZ']")
    }

    get breakingBadSeries() {
        return $("[tabindex='-1'][href$='/404900/']")
    }

    get detailsBlick() {
        return $("[data-tid='71e757c']")
    }

    get serialName() {
        return $("span[class$='JaNKM']");
    }

    get breakingBadName() {
        return 'Breaking Bad'
    }

    public open() {
        return browser.url(`https://www.kinopoisk.ru/lists/movies/series-top250/`)
    }
}

export default new SeriesPage();
