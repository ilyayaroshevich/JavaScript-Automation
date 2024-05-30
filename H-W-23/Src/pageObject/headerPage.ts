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
        this.vkButton = page.getByTitle('3DNews ВКонтакте');
        this.youTubeButton = page.getByTitle('Youtube 3DNews');
        this.xButton = page.getByTitle('Твиттер 3DNews');
        this.classMatesButton = page.getByTitle('3DNews в Одноклассниках');
        this.telegramButton = page.getByTitle('Telegram канал 3DNews');
    }

    async buttonsIsDisplayed(): Promise<void> {
        expect(await this.vkButton.toBeVisible()).toBe(true);
        expect(await this.youTubeButton.toBeVisible()).toBe(true);
        expect(await this.xButton.toBeVisible()).toBe(true);
        expect(await this.classMatesButton.toBeVisible()).toBe(true);
        expect(await this.telegramButton.toBeVisible()).toBe(true);
    };



}

