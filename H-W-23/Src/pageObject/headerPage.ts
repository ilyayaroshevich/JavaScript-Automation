import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';

export class HeaderPage extends BasePage {
    readonly page: Page;
    private vkButton: any;
    private youTubeButton: any;
    private xButton: any;
    private classMatesButton: any;
    private telegramButton: any;

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
        expect(await this.vkButton.isVisible()).toBe(true);
        expect(await this.youTubeButton.isVisible()).toBe(true);
        expect(await this.xButton.isVisible()).toBe(true);
        expect(await this.classMatesButton.isVisible()).toBe(true);
        expect(await this.telegramButton.isVisible()).toBe(true);
    };



}

