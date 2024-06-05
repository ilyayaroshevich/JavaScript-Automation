import { MainPage } from "../support/pages/mainPage"
import { HeaderPage } from "../support/pages/headerPage"
import { ServicesPage } from "../support/pages/servicesPage";

const mainPage = new MainPage();
const headerPage = new HeaderPage();
const servicesPage = new ServicesPage();
describe('Navigations from Main page', () => {

  beforeEach(() => {
    mainPage.openPage();  
  })
  it('Test 1: Navigation to services page', () => {
    headerPage.clickOnNavigationBarLink(headerPage.servicesLink);
    servicesPage.checkThatUrlIs();
  })

  it('Test 2: Navigation to baraholka page', () => {
    
  })

  it('Test 3: Navigation to forum page', () => {
    
  })

  it('Test 4: Navigation to profile page of services', () => {
    
  })

  it('Test 5: Navigation to forum page and click on first important topic', () => {
    
  })

})