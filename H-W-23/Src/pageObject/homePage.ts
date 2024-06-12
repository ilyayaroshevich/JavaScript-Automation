import { expect, type Page } from '@playwright/test'
import { BasePage } from './basePage';

export class HomePage extends BasePage {
    readonly page: Page;
    readonly url: string;
    readonly showCryptoButton: any;
    readonly currencyBlock: any;
    readonly gamesButton: any;
    readonly searchField: any;
    readonly newsLink: any;
    readonly reviews:any;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://3dnews.ru/';
        this.showCryptoButton = page.getByText('Показать курсы криптовалют');
        this.currencyBlock = page.locator('#currencyTicker div').first();
        this.gamesButton = page.getByTitle('игры', { exact: true });
        this.searchField = page.locator('#search-text');
        this.newsLink = page.getByRole('link', { name: 'Новости', exact: true });
        this.reviews = page.locator("td[rowspan='2'] >ul");
    };

    async openPage() {
        await super.openPage(this.url);
    };

    async cryptoCurrencyIsVisible() {
        await this.showCryptoButton.click();
        await expect(this.currencyBlock).toBeVisible();
    };

};

