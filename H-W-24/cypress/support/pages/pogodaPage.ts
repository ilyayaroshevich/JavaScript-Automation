import BasePage from "./basePage";
export class PogodaPage extends BasePage {
    url: string;
    weatherCityButton: string;
    citiesDropDown: string;
    minskCity: string;
    kievCity:string;
    constructor() {
        super();
        this.url = 'https://pogoda.onliner.by/';
        this.weatherCityButton = "a[class='js-weather-city']";
        this.citiesDropDown = "div[class^='b-weather__city']";
        this.minskCity = "div[class^='b-weather__city']>ul";
        this.kievCity = "div[class^='b-weather__city']>ul>li>a[data-wmoid='33345']";
    
    }

}