import { $ } from '@wdio/globals'
import BasePage from './basePage';


class MediaPage extends BasePage {

get allMaterialsButton () {return $("[href='/media/'][class$=' active']")}; 

get mediaUrl () {return 'https://www.kinopoisk.ru/media/'}

public open() {
    return browser.url(`https://www.kinopoisk.ru/media/`)
}
}

export default new MediaPage();
