import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';


class FilmPage extends BasePage {
    constructor() {
        super();
      };
    get filmName() {
        return $("span[class$='JaNKM']");
    };
};

export default new FilmPage;
