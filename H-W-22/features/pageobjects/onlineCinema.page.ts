import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';


class OnlineCinemaPage extends BasePage {

    get onlineCinemaUrl() { return 'https://hd.kinopoisk.ru/' }

}

export default new OnlineCinemaPage();
