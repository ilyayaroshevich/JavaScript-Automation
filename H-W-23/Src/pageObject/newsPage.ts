import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';
import { redColor } from '../helpers/colors';

export class NewsPage extends BasePage {
    readonly page: Page;
    url: string;
    inPastButton:any;
    inFutureButton:any;
    allNewsButton:any;
    urlSecondPage: string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://3dnews.ru/news';
        this.inPastButton = page.getByRole('link', { name: 'В прошлое  →' }).first();
        this.inFutureButton = page.getByRole('link', { name: '←  В будущее' }).first();
        this.allNewsButton = page.locator('div').filter({ hasText: 'все новости' }).nth(3);
        this.urlSecondPage = 'https://3dnews.ru/news/page-2.html';
    }

    async openPage(url: string) {
        await super.openPage(this.url)
    }

    async urlIsCorrect(expectedUrl:string){
        expect(this.page).toHaveURL(expectedUrl);
    }

    async colorIsCorrect() {
        await this.allNewsButton.waitFor({ state: 'visible' });
        await expect(this.allNewsButton).toHaveCSS('background-color', redColor, { timeout: 10000 });
    }




}

