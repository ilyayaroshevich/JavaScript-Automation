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
        const filmName = await this.filmName;
        const textFilmName = await filmName.getText();
        return textFilmName;
    };
};

export default /*new*/ FilmPage;
//for pageFactory