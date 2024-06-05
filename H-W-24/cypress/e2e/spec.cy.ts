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

  beforeEach(() => {
    mainPage.openPage();
  })
  it('Test 1: Navigation to services page', () => {
    headerPage.clickOnNavigationBarLink(headerPage.servicesLink);
    servicesPage.checkThatUrlIs();
    servicesPage.elementIsExistAndVisible(servicesPage.serviceFilter_1);
    servicesPage.elementIsExistAndVisible(servicesPage.serviceFilter_2);
    servicesPage.elementIsExistAndVisible(servicesPage.taskButton);
    servicesPage.elementIsExistAndVisible(servicesPage.createTaskLink);
    servicesPage.elementIsExistAndVisible(servicesPage.profilesButton);

    cy.intercept('GET', 'https://s.onliner.by/api/tasks').as('tasks');
    cy.wait('@tasks').then((interception) => {
      const { response } = interception;
      expect(response.body.page.limit).toEqual(50);
      expect(response.body.page.items).toEqual(50);
    });
      cy.fixture('buttonNames.json').then((buttonNames) => {
        servicesPage.getTextFromElementIs(servicesPage.createTaskLink, buttonNames.CREATING_TASK_BUTTON);
        servicesPage.getTextFromElementIs(servicesPage.taskButton, buttonNames.TASK_BUTTON);
        servicesPage.getTextFromElementIs(servicesPage.profilesButton, buttonNames.PROFILES_BUTTON);
      });
      cy.fixture('colors.json').then((colors) => {
        servicesPage.getCssValueFromElement(servicesPage.createTaskLink, 'background-color', colors.GREEN);
        servicesPage.getCssValueFromElement(servicesPage.taskButton, 'background-color', colors.GRAY);
        servicesPage.getCssValueFromElement(servicesPage.profilesButton, 'color', colors.BLUE);
      });
    });
  });
  

  // it('Test 2: Navigation to baraholka page', () => {
  //   headerPage.clickOnNavigationBarLink(headerPage.baraholkaLink);
  //   baraholkaPage.checkThatUrlIs();

  // })

  // it('Test 3: Navigation to forum page', () => {
  //   headerPage.clickOnNavigationBarLink(headerPage.forumLink);
  //   forumPage.checkThatUrlIs();

  // })
