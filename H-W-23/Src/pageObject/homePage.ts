import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';
import { clickOnButton } from '../helpers/commonFunctions';

export class HomePage extends BasePage {
    readonly page: Page;
    readonly url: string;
    readonly showCryptoButton: any;
    readonly currencyBlock: any;
    readonly gamesButton: any;
    readonly searchField: any;
    readonly newsButton: any;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://3dnews.ru/';
        this.showCryptoButton = page.getByText('Показать курсы криптовалют');
        this.currencyBlock = page.locator('#currencyTicker div').first();
        this.gamesButton = page.getByTitle('игры', { exact: true });
        this.searchField = page.locator('#search-text');
        this.newsButton = page.getByRole('link', { name: 'Новости', exact: true });
    }

    async openPage() {
        await super.openPage(this.url)
    }

    async cryptoCurrencyIsVisible() {
        await this.showCryptoButton.click();
        await expect(this.currencyBlock).toBeVisible();
    }
}

