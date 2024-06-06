import { expectedPostObject } from "../../../../H-W-18/Consts/consts";
import BasePage from "./basePage";
export class KursPage extends BasePage {
    url: string;
    currencyConverter: string;
    switcherSale: string;
    switcherBuy: string;
    currencySelector: string;
    inputForSaleSwitcher: string;
    inputForBuySwitcher: string;
    constructor() {
        super();
        this.url = 'https://kurs.onliner.by/';
        this.currencyConverter = "div[class='b-currency-converter']";
        this.switcherSale = "li[class='switch']>label[for='sale']";
        this.switcherBuy = "li[class='switch']>label[for='buy']";
        this.currencySelector = "li[class='select']>select[id^='currency']";
        this.inputForSaleSwitcher = "li[class='switch']>label[for='sale']>input";
        this.inputForBuySwitcher = "li[class='switch']>label[for='buy']>input"
    };

    public checkId(selector, expectedIdValue) {
        cy.get(selector).should('have.id', expectedIdValue);

    };

    public checkAttributeValueInChildElements(parentSelector, expectedValues, tagname, attribute) {
        cy.get(parentSelector)
            .find(tagname)
            .each(($value, index) => {
                cy.wrap($value).should('have.attr', attribute, expectedValues[index]);
            });
    };
}