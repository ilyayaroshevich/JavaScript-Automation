import { browser } from '@wdio/globals'

export default class BasePage {

    get blackColor() { return 'rgba(0,0,0,1)' };

    get grayColor() { return 'none 0% 0% auto repeat padding-box border-box scroll rgba(0, 0, 0, 0.05)' };

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

