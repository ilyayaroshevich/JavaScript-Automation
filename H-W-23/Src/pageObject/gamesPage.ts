import { expect, type Page } from '@playwright/test'
import { BasePage } from './basePage';
import { white } from '../helpers/colors';

export class GamesPage extends BasePage {
    readonly page: Page;
    readonly url: string;
    readonly title: string;
    readonly gamesTitle: any;
    readonly subsectionsGames: any;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://3dnews.ru/games';
        this.title = 'Игры';
        this.gamesTitle = page.locator('#section-header').getByText('Игры');
        this.subsectionsGames = page.locator('//td[@id="left-sidebar"]/div[12]');
    };

    async openPage(url: string) {
        await super.openPage(this.url);
    };

    async sideBarIsVisible() {
        await expect(this.gamesTitle).toBeVisible();
    };

    async colorIsCorrect() {
        await this.gamesTitle.waitFor({ state: 'visible' });
        await expect(this.gamesTitle).toHaveCSS('color', white);
    };

};

