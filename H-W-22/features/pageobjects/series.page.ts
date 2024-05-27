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

    async getTextTop250Series() {
        const top250TextTitle = await this.top250SeriesTitle;
        await top250TextTitle.waitForDisplayed();
        const top250Text = await top250TextTitle.getText();
        return top250Text;
    };

    // async clickOnBreakinBadSeries() {
    //     const breakingBadSeries = await this.breakingBadSeries;
    //     await breakingBadSeries.waitForDisplayed();
    //     breakingBadSeries.click();
    // };

    // async serialsDetailsIsDisplayed() {
    //     const serialDetails = (await this.detailsBlockOfMovie).isDisplayed();
    //     return serialDetails;
    // };

    async getTextSerialsName() {
        const nameOfSerial = (await this.serialName).getText();
        return nameOfSerial;
    };

};

export default /*new*/ SeriesPage;
