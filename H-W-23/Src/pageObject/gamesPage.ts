import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';

export class GamesPage extends BasePage {
    readonly page: Page;
    private url: string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://3dnews.ru/games';
    }

    async openPage(url: string) {
        await super.openPage(this.url)
    }

}

