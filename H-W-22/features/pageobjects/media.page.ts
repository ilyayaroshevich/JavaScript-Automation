import { $ } from '@wdio/globals'
import BasePage from './base.page.ts';

class MediaPage extends BasePage {
    constructor() {
        super();
      };
    get allMaterialsButton() { return $("[href='/media/'][class$=' active']") };

    get mediaUrl() { return 'https://www.kinopoisk.ru/media/' };

    public open() {
        return browser.url(`https://www.kinopoisk.ru/media/`);
    };

    async allMaterialsIsDisplayed(){
        const allMaterialsButton = this.allMaterialsButton;
        const allMaterialsButtonIsDisplayed = await allMaterialsButton.isDisplayed();
        return allMaterialsButtonIsDisplayed;
    };

    
    async getCssPropertyFromAllMaterialsButton(){
        const allMaterialsButton = this.allMaterialsButton;
        const allMaterialsButtonCssProperty = await allMaterialsButton.getCSSProperty('color');
        return allMaterialsButtonCssProperty;
    };
};

export default /*new*/ MediaPage;
