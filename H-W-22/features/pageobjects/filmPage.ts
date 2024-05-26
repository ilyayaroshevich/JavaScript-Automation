import { $ } from '@wdio/globals'
import BasePage from './basePage';


class FilmPage extends BasePage {

    get filmName() {
        return $("span[class$='JaNKM']");
    }
}

export default new FilmPage();
