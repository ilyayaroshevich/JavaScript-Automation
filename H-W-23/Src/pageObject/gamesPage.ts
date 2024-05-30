import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';
import { white } from '../helpers/colors';

export class GamesPage extends BasePage {
    readonly page: Page;
    url: string;
    title: string;
    gamesTitle: any;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://3dnews.ru/games';
        this.title = 'Игры';
        this.gamesTitle = page.locator("td[data-url='games']")
    }

    async openPage(url: string) {
        await super.openPage(this.url)
    }

    async urlIsCorrect() {
        const currentUrl = await super.getCurrentUrl();
        expect(currentUrl).toEqual(this.url);
    }

    async titleIsCorrect() {
        const currentUrl = await super.getCurrentTitle();
        expect(currentUrl).toEqual(this.title);
    }

    async sideBarIsVisible() {
        await expect(this.gamesTitle).toBeVisible();
    }

    async colorIsCorrect() {
        await this.gamesTitle.waitFor({ state: 'visible' });
        await expect(this.gamesTitle).toHaveCSS('color', white);
    }

}

