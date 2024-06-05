import BasePage from "./basePage";
export class HeaderPage extends BasePage {
    servicesLink: string;
    baraholkaLink: string;
    forumLink: string;
    constructor() {
        super();
        this.servicesLink = "li[class='b-main-navigation__item']>a[href^='https://s.']";
        this.baraholkaLink = "li[class='b-main-navigation__item']>a[href^='https://baraholka.']";
        this.forumLink = "li[class='b-main-navigation__item']>a[href^='https://forum.']";

    }

    public clickOnNavigationBarLink(locator: any) {
        cy.get(locator).click()
    }
}