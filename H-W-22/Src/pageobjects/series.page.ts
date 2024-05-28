import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';

class SeriesPage extends BasePage {
    constructor() {
        super();
    };
    get top250BestSeriesText() {
        return '250 лучших сериалов'
    };

    get top250SeriesUrl() {
        return 'https://www.kinopoisk.ru/lists/movies/series-top250/'
    };

    get breakingBadUrl() {
        return 'https://www.kinopoisk.ru/series/404900/'
    };

    get top250SeriesTitle() {
        return $("[class='styles_title__jB8AZ']");
    };

    get breakingBadSeries() {
        return $("[tabindex='-1'][href$='/404900/']");
    };

    get detailsBlockOfMovie() {
        return $("[data-tid='71e757c']");
    };

    get serialName() {
        return $("span[class$='JaNKM']");
    }

    get breakingBadName() {
        return 'Breaking Bad'
    };

    public open() {
        return browser.url(`https://www.kinopoisk.ru/lists/movies/series-top250/`);
    };

};

export default new SeriesPage;
