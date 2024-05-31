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
        this.gamesTitle = page.locator('#section-header').getByText('Игры');
    }

    async openPage(url: string) {
        await super.openPage(this.url)
    }

    async urlIsCorrect() {
        expect(this.page).toHaveURL(this.url);
    }

    async titleIsCorrect() {
        await expect(this.page).toHaveTitle(this.title);
    }

    async sideBarIsVisible() {
        await expect(this.gamesTitle).toBeVisible();
    }

    async colorIsCorrect() {
        await this.gamesTitle.waitFor({ state: 'visible' });
        await expect(this.gamesTitle).toHaveCSS('color', white);
    }

}

