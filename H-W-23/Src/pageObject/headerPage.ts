import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage';

export class HeaderPage extends BasePage {
    readonly page: Page;
    readonly vkButton: any;
    readonly youTubeButton: any;
    readonly xButton: any;
    readonly classMatesButton: any;
    readonly telegramButton: any;
    readonly groupOfButtons:any;
    readonly dzen:any;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.vkButton = page.getByRole('link', { name: '3DNews ВКонтакте' });
        this.youTubeButton = page.getByRole('link', { name: 'Youtube 3DNews' });
        this.xButton = page.getByRole('link', { name: 'Твиттер 3DNews' });
        this.classMatesButton = page.getByRole('link', { name: '3DNews в Одноклассниках' });
        this.telegramButton = page.getByRole('link', { name: 'Telegram канал 3DNews' });
        this.dzen = page.getByRole('link', { name: '3DNews в Дзен' });
        this.groupOfButtons = page.locator('#stripe div').filter({ hasText: '+' });
    }

    async buttonsHasCorrectHrefAttribute(): Promise<void> {
        await this.page.waitForSelector("div[class='right socbuttons']", { state: 'visible' });
        await expect(this.vkButton).toHaveAttribute('href','https://vk.com/ru_3dnews');
        await expect(this.youTubeButton).toHaveAttribute('href','https://www.youtube.com/user/3DNewsRU');
        await expect(this.xButton).toHaveAttribute('href','https://twitter.com/3D_News');
        await expect(this.dzen).toHaveAttribute('href','https://dzen.ru/3dnews.ru?favid=1188');
        await expect(this.classMatesButton).toHaveAttribute('href','https://ok.ru/group/54669301383183');
        await expect(this.telegramButton).toHaveAttribute('href','https://telegram.me/ru3dnews');
    };



}

