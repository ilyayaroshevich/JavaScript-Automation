import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';

export class HomePage extends BasePage {
    readonly page: Page;
    private url: string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://3dnews.ru/';
    }

    async openPage() {
        await super.openPage(this.url)
    }

}

