import { MainPage } from "../support/pages/mainPage"
import { HeaderPage } from "../support/pages/headerPage"
import { ServicesPage } from "../support/pages/servicesPage";
import { BaraholkaPage } from "../support/pages/baraholkaPage";
import { ForumPage } from "../support/pages/forumPage";

const mainPage = new MainPage();
const headerPage = new HeaderPage();
const servicesPage = new ServicesPage();
const baraholkaPage = new BaraholkaPage();
const forumPage = new ForumPage();
describe('Navigations from Main page', () => {
  before(() => {
    cy.intercept('GET', 'https://s.onliner.by/api/tasks').as('tasks');
    cy.intercept('GET', 'https://forum.onliner.by/sdapi/pogoda/api/now').as('now');

  })
  beforeEach(() => {
    mainPage.openPage();
  })
  it('Test 1: Navigation to services page', () => {
    cy.clickOnNavigationBarLink(headerPage.servicesLink);
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
    cy.clickOnNavigationBarLink(headerPage.baraholkaLink);
    cy.checkThatUrlIs(baraholkaPage.url);
    cy.elementIsExistAndVisible(baraholkaPage.fleaMarketButton);
    cy.fixture('buttonNames.json').then((buttonNames) => {
      cy.getTextFromElementIs(baraholkaPage.fleaMarketButton, buttonNames.BARAHOLKA_BUTTON);
    });
    cy.fixture('font-family.json').then((fontFamily) => {
      cy.getCssValueFromElement(baraholkaPage.fleaMarketButton, 'font-family' ,fontFamily.BARAHOLKA_BUTTON);
    });

  });

  it.only('Test 3: Navigation to forum page', () => {
        cy.clickOnNavigationBarLink(headerPage.forumLink);
        cy.checkThatUrlIs(forumPage.url);
        cy.elementIsExistAndVisible(forumPage.importantTopics);      
        forumPage.checkAmountOfInportantTopicks(11);
        cy.wait('@now').then((interception) => {
          const { response } = interception;
          expect(response.body.city).to.equal("Минске");
        });
  })



});




