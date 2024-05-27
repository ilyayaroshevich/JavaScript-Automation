import { browser } from '@wdio/globals'

export default class BasePage {

    get whiteColor() { return 'rgba(247,247,255,.9)' }

    get blackColor() { return 'rgb(0, 0, 0)' }

    // async maximizeMindow(){
    //     browser.maximizeWindow();
    // }
}

