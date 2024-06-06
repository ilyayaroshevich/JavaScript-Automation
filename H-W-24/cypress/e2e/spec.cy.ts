import { MainPage } from "../support/pages/mainPage"
import { HeaderPage } from "../support/pages/headerPage"
import { ServicesPage } from "../support/pages/servicesPage";
import { BaraholkaPage } from "../support/pages/baraholkaPage";
import { ForumPage } from "../support/pages/forumPage";
import { KursPage } from "../support/pages/kursPage";
import { PogodaPage } from "../support/pages/pogodaPage";

const mainPage = new MainPage();
const headerPage = new HeaderPage();
const servicesPage = new ServicesPage();
const baraholkaPage = new BaraholkaPage();
const forumPage = new ForumPage();
const kursPage = new KursPage();
const pogodaPage = new PogodaPage();

describe('Navigations from Main page', () => {
  beforeEach(() => {
    mainPage.openPage();
    cy.intercept('GET', 'https://s.onliner.by/api/tasks').as('tasks');
    cy.intercept('GET', 'https://forum.onliner.by/sdapi/pogoda/api/now').as('now');
    cy.intercept('GET', 'https://pogoda.onliner.by/api/forecast/*').as('pogodaNow');
  })
  it('Test 1: Navigation to services page', () => {
    cy.clickOnElement(headerPage.servicesLink);
    cy.checkThatUrlIs(servicesPage.url);
    cy.elementIsExistAndVisible(servicesPage.serviceFilter_1);
    cy.elementIsExistAndVisible(servicesPage.serviceFilter_2);
    cy.elementIsExistAndVisible(servicesPage.taskButton);
    cy.elementIsExistAndVisible(servicesPage.createTaskLink);
    cy.elementIsExistAndVisible(servicesPage.profilesButton);
    cy.wait('@tasks').then((interception) => {
      const { response } = interception;
      expect(response.body.page.limit).to.equal(50);
      expect(response.body.page.items).to.equal(50);
      cy.fixture('buttonNames.json').then((buttonNames) => {
        cy.getTextFromElementIs(servicesPage.createTaskLink, buttonNames.CREATING_TASK_BUTTON);
        cy.getTextFromElementIs(servicesPage.taskButton, buttonNames.TASK_BUTTON);
        cy.getTextFromElementIs(servicesPage.profilesButton, buttonNames.PROFILES_BUTTON);
      });
      cy.fixture('colors.json').then((colors) => {
        cy.getCssValueFromElement(servicesPage.createTaskLink, 'background-color', colors.GREEN);
        cy.getCssValueFromElement(servicesPage.taskButton, 'background-color', colors.GRAY);
        cy.getCssValueFromElement(servicesPage.profilesButton, 'color', colors.BLUE);
      });
    });
  });
  it('Test 2: Navigation to baraholka page', () => {
    cy.clickOnElement(headerPage.baraholkaLink);
    cy.checkThatUrlIs(baraholkaPage.url);
    cy.elementIsExistAndVisible(baraholkaPage.fleaMarketButton);
    cy.fixture('buttonNames.json').then((buttonNames) => {
      cy.getTextFromElementIs(baraholkaPage.fleaMarketButton, buttonNames.BARAHOLKA_BUTTON);
    });
    cy.fixture('font-family.json').then((fontFamily) => {
      cy.getCssValueFromElement(baraholkaPage.fleaMarketButton, 'font-family', fontFamily.BARAHOLKA_BUTTON);
    });
  });
  it('Test 3: Navigation to forum page', () => {
    cy.clickOnElement(headerPage.forumLink);
    cy.checkThatUrlIs(forumPage.url);
    cy.elementIsExistAndVisible(forumPage.importantTopics);
    forumPage.checkAmountOfInportantTopicks(11);
    cy.wait('@now').then((interception) => {
      const { response } = interception;
      expect(response.body.city).to.equal("Минске");
    });
  });
  it('Test 4: Navigation to kurs page', () => {
    cy.clickOnElement(headerPage.kursLink);
    cy.checkThatUrlIs(kursPage.url);
    cy.elementIsExistAndVisible(kursPage.currencySelector);
    cy.elementIsExistAndVisible(kursPage.currencyConverter);
    cy.elementIsExistAndVisible(kursPage.switcherBuy);
    cy.elementIsExistAndVisible(kursPage.switcherSale);
    kursPage.checkId(kursPage.inputForSaleSwitcher, 'sale')
    kursPage.checkId(kursPage.inputForBuySwitcher, 'buy')
    cy.fixture('attributeValue.json').then((attributeValue) => {
      kursPage.checkAttributeValueInChildElements(kursPage.currencySelector, attributeValue.OPTION_ATTRIBUTE, 'option', 'value')
    });
  });
  it('Test 5: Navigation to pogoda page', () => {
    cy.fixture('buttonNames.json').then((cityName) => {
      cy.clickOnElement(headerPage.pogodaLink);
      cy.checkThatUrlIs(pogodaPage.url);
      cy.elementIsExistAndVisible(pogodaPage.weatherCityButton);
      cy.wait('@pogodaNow').then((interception) => {
        const { response } = interception;
        expect(response.body.city).to.equal(cityName.WEATHER_CITY_BUTTON[0]);
      });
      pogodaPage.checkTextFromWeatherCity(cityName.WEATHER_CITY_BUTTON[0]);
      cy.clickOnElement(pogodaPage.weatherCityButton);
      cy.elementIsExistAndVisible(pogodaPage.citiesDropDown);
      pogodaPage.findAndClickOnKievCity();
      pogodaPage.checkTextFromWeatherCity(cityName.WEATHER_CITY_BUTTON[1]);
      cy.wait('@pogodaNow').then((interception) => {
        const { response } = interception;
        expect(response.body.city).to.equal(cityName.WEATHER_CITY_BUTTON[1]);
      });
    });
  });
});





