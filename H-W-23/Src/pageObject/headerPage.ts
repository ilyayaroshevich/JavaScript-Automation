import { expect, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HeaderPage extends BasePage {
    readonly page: Page;
    readonly vkLink: any;
    readonly youTubeLink: any;
    readonly xLink: any;
    readonly classMatesLink: any;
    readonly telegramLink: any;
    readonly groupOfLinks:any;
    readonly dzenLink:any;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.vkLink = page.getByRole('link', { name: '3DNews ВКонтакте' });
        this.youTubeLink = page.getByRole('link', { name: 'Youtube 3DNews' });
        this.xLink = page.getByRole('link', { name: 'Твиттер 3DNews' });
        this.classMatesLink = page.getByRole('link', { name: '3DNews в Одноклассниках' });
        this.telegramLink = page.getByRole('link', { name: 'Telegram канал 3DNews' });
        this.dzenLink = page.getByRole('link', { name: '3DNews в Дзен' });
        this.groupOfLinks = page.locator('#stripe div').filter({ hasText: '+' });
    };

    async buttonsHasCorrectHrefAttribute(): Promise<void> {
        await this.page.waitForSelector("div[class='right socbuttons']", { state: 'visible' });
        await expect(this.vkLink).toHaveAttribute('href','https://vk.com/ru_3dnews');
        await expect(this.youTubeLink).toHaveAttribute('href','https://www.youtube.com/user/3DNewsRU');
        await expect(this.xLink).toHaveAttribute('href','https://twitter.com/3D_News');
        await expect(this.dzenLink).toHaveAttribute('href','https://dzen.ru/3dnews.ru?favid=1188');
        await expect(this.classMatesLink).toHaveAttribute('href','https://ok.ru/group/54669301383183');
        await expect(this.telegramLink).toHaveAttribute('href','https://telegram.me/ru3dnews');
    };
};

