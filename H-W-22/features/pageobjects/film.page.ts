import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';


class FilmPage extends BasePage {
    constructor() {
        super();
      };
    get filmName() {
        return $("span[class$='JaNKM']");
    };

    async getFilmName() {
        return await this.filmName.getText();
    };
};

export default new FilmPage;
