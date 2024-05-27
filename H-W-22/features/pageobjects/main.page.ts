import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';


class MainPage extends BasePage {

    get mediaButton() { return $("[href='/media/'][class$='BSbZW']") }

    get seriesButton() { return $("[href$='/3/'][class$='BSbZW']") }

    public open() {
        return browser.url(`https://www.kinopoisk.ru/`)
    }

    
}

export default new MainPage();
