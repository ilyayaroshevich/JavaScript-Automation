import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';
import { darkBlue } from '../helpers/colors';

export class GamesPage extends BasePage {
    readonly page: Page;
    url: string;
    title: string;
    sideBarButtons:any;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://3dnews.ru/games';
        this.title = 'Игры';
        this.sideBarButtons = page.locator("td[id='left-sidebar']>div[class='sidebar-chunk submenu'] > a[href^='/games/']")
    }

    async openPage(url: string) {
        await super.openPage(this.url)
    }

    async urlIsCorrect(){
        const currentUrl = await super.getCurrentUrl();
        expect(currentUrl).toEqual(this.url);
    }

    async titleIsCorrect(){
        const currentUrl = await super.getCurrentTitle();
        expect(currentUrl).toEqual(this.title);
    }

    async sideBarIsVisible(){
        expect(this.sideBarButtons).toBeVisible();
    }

    async colorIsCorrect(){
        const buttonsColor = await this.page.getAttribute(this.sideBarButtons, 'background');
        expect(buttonsColor).toEqual(darkBlue);
    }

}

