import { expect, type Page } from '@playwright/test'

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    async openPage(url: string) {
        await this.page.goto(url);
    };

    async closePage() {
        await this.page.close();
    };

    async getCurrentUrl() {
        return this.page.url();
    };

    async getCurrentTitle() {
        return this.page.title();
    };

    async urlIsCorrect(expectedUrl: string) {
        expect(this.page).toHaveURL(expectedUrl);
    };

    async titleIsCorrect(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
    };

};

