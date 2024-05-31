import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';

export class HeaderPage extends BasePage {
    readonly page: Page;
    vkButton: any;
    youTubeButton: any;
    xButton: any;
    classMatesButton: any;
    telegramButton: any;
    groupOfButtons:any;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.vkButton = page.locator("a.vk-b");
        this.youTubeButton = page.locator("a.youtube-b");
        this.xButton = page.locator("a.twitter-b");
        this.classMatesButton = page.locator("a.google-plus-b");
        this.telegramButton = page.locator("a.telegram-b");
        this.groupOfButtons = page.locator("div.right.socbuttons");
    }

    async buttonsHasCorrectHrefAttribute(): Promise<void> {
        await this.page.waitForSelector("div[class='right socbuttons']", { state: 'visible' });
        await expect(this.vkButton).toHaveAttribute('href','https://vk.com/ru_3dnews');
        await expect(this.youTubeButton).toHaveAttribute('href','https://www.youtube.com/user/3DNewsRU');
        await expect(this.xButton).toHaveAttribute('href','https://twitter.com/3D_News');
        await expect(this.classMatesButton).toHaveAttribute('href','https://dzen.ru/3dnews.ru?favid=1188');
        await expect(this.telegramButton).toHaveAttribute('href','https://telegram.me/ru3dnews');
    };



}

