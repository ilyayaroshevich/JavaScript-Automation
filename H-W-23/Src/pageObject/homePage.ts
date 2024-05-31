import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';
import { clickOnButton } from '../helpers/commonFunctions';

export class HomePage extends BasePage {
    readonly page: Page;
    url: string;
    showCryptoButton: any;
    currencyBlock: any;
    gamesButton: any;
    searchField: any;
    newsButton: any;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://3dnews.ru/';
        this.showCryptoButton = page.getByText('Показать курсы криптовалют');
        this.currencyBlock = page.locator("div[id='currencyTicker']>div[class='content-block-data white']");
        this.gamesButton = page.locator("a[title='игры']")
        this.searchField = page.locator("input[name='query-input']");
        this.newsButton = page.locator("a[title='Новости']");
    }

    async openPage() {
        await super.openPage(this.url)
    }

    async cryptoCurrencyIsVisible() {
        await this.showCryptoButton.click();
        await expect(this.currencyBlock).toBeVisible();
    }
}

