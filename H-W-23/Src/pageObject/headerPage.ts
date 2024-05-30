import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';

export class HeaderPage extends BasePage {
    readonly page: Page;
    vkButton: any;
    youTubeButton: any;
    xButton: any;
    classMatesButton: any;
    telegramButton: any;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.vkButton = page.locator("a[title='3DNews ВКонтакте']");
        this.youTubeButton = page.locator("a[title='Youtube 3DNews']");
        this.xButton = page.locator("a[title='Твиттер 3DNews']");
        this.classMatesButton = page.locator("a[title='3DNews в Одноклассниках']");
        this.telegramButton = page.locator("a[title='Telegram канал 3DNews']");
    }

    async buttonsIsDisplayed(): Promise<void> {
        expect(await this.vkButton).toBeVisible();
        expect(await this.youTubeButton).toBeVisible();
        expect(await this.xButton).toBeVisible();
        expect(await this.classMatesButton).toBeVisible();
        expect(await this.telegramButton).toBeVisible();;
    };



}

