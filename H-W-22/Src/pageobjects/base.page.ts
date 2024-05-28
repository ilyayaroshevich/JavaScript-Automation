import { browser } from '@wdio/globals'
import {blackColor, grayColor} from '../helpers/colors.ts'
export default class BasePage {

    get blackColor() { return blackColor };

    get grayColor() { return grayColor };

    async maximizeWindow() {
        await browser.maximizeWindow();
    }

    async getUrl() {
        return await browser.getUrl();
    }

    async deleteSession() {
        await browser.deleteSession();
    }
};

