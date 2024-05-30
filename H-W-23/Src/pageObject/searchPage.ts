import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';
import { darkBlue } from '../helpers/colors';

export class SearchPage extends BasePage {
    readonly page: Page;
    urlAfterSearch: string;
    title:string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.urlAfterSearch = 'https://3dnews.ru/search/#query=Смартфоны&sdate=&edate=&action=search';
        this.title = 'Поиск';
    }

    async openPage(url: string) {
        await super.openPage(this.urlAfterSearch)
    }

    async urlIsCorrect(){
        const currentUrl = await super.getCurrentUrl();
        expect(currentUrl).toEqual(this.urlAfterSearch);
    }

    async titleIsCorrect(){
        const currentUrl = await super.getCurrentTitle();
        expect(currentUrl).toEqual(this.title);
    }

    

}

