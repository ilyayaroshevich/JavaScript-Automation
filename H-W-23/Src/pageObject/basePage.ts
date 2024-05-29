import { expect, type Locator, type Page } from '@playwright/test'
import { url } from 'inspector';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openPage(url: string) {
        await this.page.goto(url)
    }

    async closePage() {
        await this.page.close()
    }

    async getCurrentUrl() {
        return this.page.url()
    }

    async getCurrentTitle() {
        return this.page.title()
    }

}

