import BasePage from "./basePage";
export class PogodaPage extends BasePage {
    url: string;
    weatherCityButton: string;
    citiesDropDown: string;
    constructor() {
        super();
        this.url = 'https://pogoda.onliner.by/';
        this.weatherCityButton = "a[class='js-weather-city']";
        this.citiesDropDown = "div[class^='b-weather__city']";
    }
    public findAndClickOnKievCity() {
        cy.get(this.citiesDropDown)
            .find('ul')
            .last()
            .find('li')
            .last()
            .find('a[data-wmoid="33345"]')
            .click();
    };
    public checkTextFromWeatherCity(expectedText) {
        cy.get(this.weatherCityButton).should('have.text', expectedText)
    }
}