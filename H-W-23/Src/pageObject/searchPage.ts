import { type Page } from '@playwright/test'
import { BasePage } from './basePage';

export class SearchPage extends BasePage {
    readonly page: Page;
    readonly urlAfterSearch: string;
    readonly title: string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.urlAfterSearch = 'https://3dnews.ru/search/#query=%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%D1%8B&sdate=&edate=&action=search';
        this.title = 'Поиск';
    };
    
    async openPage(url: string) {
        await super.openPage(this.urlAfterSearch);
    };
};

