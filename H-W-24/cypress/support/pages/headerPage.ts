import BasePage from "./basePage";
export class HeaderPage extends BasePage {
    servicesLink: string;
    baraholkaLink: string;
    forumLink: string;
    kursLink: string;
    pogodaLink: string;
    constructor() {
        super();
        this.servicesLink = "li[class='b-main-navigation__item']>a[href^='https://s.']";
        this.baraholkaLink = "li[class='b-main-navigation__item']>a[href^='https://baraholka.']";
        this.forumLink = "li[class='b-main-navigation__item']>a[href^='https://forum.']";
        this.kursLink = "a[class^='b-top-navigation'][href^='https://kurs.']";
        this.pogodaLink = "a[class^='b-top-navigation'][href^='https://pogoda.']";
    }

}