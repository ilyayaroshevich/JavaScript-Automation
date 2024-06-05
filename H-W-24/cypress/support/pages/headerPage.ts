import BasePage from "./basePage";
export class HeaderPage extends BasePage {
        servicesLink: any; 
    constructor(){
        super();
        this.servicesLink="li[class='b-main-navigation__item']>a[href^='https://s.']"
    }

    public clickOnNavigationBarLink(locator:any){
        cy.get(locator).click()
    }
}