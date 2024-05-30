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
        this.inPastButton = page.locator("div[class^='content-block-header n']>a[class='right']");
        this.inFutureButton = page.locator("div[class$='toc']>div>span>a[href$='news']");
        this.allNewsButton = page.locator("div[class$='NF_select']");
        this.urlSecondPage = 'https://3dnews.ru/news/page-2.html';
    }

    async openPage(url: string) {
        await super.openPage(this.url)
    }

    async urlIsCorrect(url:string){
        const currentUrl = await super.getCurrentUrl();
        expect(currentUrl).toEqual(this.url);
    }

    async colorIsCorrect(){
        await this.allNewsButton.waitFor({ state: 'visible' });
        await expect(this.allNewsButton).toHaveCSS('color', redColor);
    }




}

