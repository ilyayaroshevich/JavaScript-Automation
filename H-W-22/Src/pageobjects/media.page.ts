import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';

class MediaPage extends BasePage {
    constructor() {
        super();
    };
    get allMaterialsButton() { return $("[href='/media/'][class$=' active']") };

    get mediaUrl() { return 'https://www.kinopoisk.ru/media/' };

    public open() {
        return browser.url(`https://www.kinopoisk.ru/media/`);
    };

    async getCssPropertyFromAllMaterialsButton() {
        return await this.allMaterialsButton.getCSSProperty('color');
    };
};

export default new MediaPage;
