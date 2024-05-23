import driver from "../driver";
import { describe, expect, test, beforeAll, afterAll, beforeEach } from '@jest/globals';
import { only } from "node:test";
import HomePage from "../Src/pageObjects/homePage";
import CatalogPage from "../Src/pageObjects/catalog";
import HeadphonesCatalogPage from "../Src/pageObjects/headphonesCatalog";
import LoginPage from "../Src/pageObjects/loginPage";
import PeoplePage from "../Src/pageObjects/peoplePage";
import HeaderPage from "../Src/pageObjects/headerPage";
import ProductPage from "../Src/pageObjects/productPage";
import BasePage from "../Src/pageObjects/basePage";
import OrderPlacementPage from "../Src/pageObjects/orderPlacementPage";

//PageObjects
const basePage = new BasePage(driver);
const homePage = new HomePage(driver)
const catalogPage = new CatalogPage(driver)
const headphonesCatalogPage = new HeadphonesCatalogPage(driver)
const loginPage = new LoginPage(driver)
const peoplePage = new PeoplePage(driver)
const headerPage = new HeaderPage(driver)
const productPage = new ProductPage(driver)
const orderPage = new OrderPlacementPage(driver)

//FactoryPage
// import { PageFactory } from "../Src/pageFactory/pageFactory";
// const headerPage = PageFactory.getPage(driver, "HeaderPage") as HeaderPage;
// const homePage = PageFactory.getPage(driver,"HomePage") as HomePage;
// const catalogPage = PageFactory.getPage(driver, "CatalogPage") as CatalogPage;
// const headphonesCatalogPage = PageFactory.getPage(driver, "HeadphonesCatalogPage") as HeadphonesCatalogPage;
// const loginPage = PageFactory.getPage(driver,"LoginPage") as LoginPage;
// const peoplePage = PageFactory.getPage(driver, "PeoplePage") as PeoplePage;
// const productPage = PageFactory.getPage(driver, "ProductPage") as ProductPage;
// const orderPage = PageFactory.getPage(driver, "OrderPlacementPage") as OrderPlacementPage;
// const basePage = PageFactory.getPage(driver, "BasePage") as BasePage;

//SingleTon
// const basePage = BasePage.getInstance();
// const homePage = HomePage.getInstance();
// const catalogPage = CatalogPage.getInstance();
// const headphonesCatalogPage = HeadphonesCatalogPage.getInstance();
// const loginPage = LoginPage.getInstance();
// const peoplePage = PeoplePage.getInstance();
// const headerPage = HeaderPage.getInstance();
// const productPage = ProductPage.getInstance();
// const orderPage = OrderPlacementPage.getInstance();


describe('Onliner', () => {
    beforeAll(async () => {
        await basePage.maximizeWindow();
    }, 30000);

    beforeEach(async () => {
        await homePage.getUrl();
    });
    test('Add product to cart', async () => {
        await headerPage.clickOnCatalogButton();
        await catalogPage.clickOnHeadphonesButton();
        await headphonesCatalogPage.clickOnHeadphoneName();
        await productPage.clickOnBuyNowButton();
        await orderPage.waitUntilUrl();
        const productIsDisplaying = await orderPage.displayingProductName();
        const textProductPlacement = await orderPage.displayingProductPlacement();
        const currentUrl = await basePage.getCurrentUrlValue();
        expect(currentUrl).toEqual(orderPage.currentUrl);
        expect(productIsDisplaying).toEqual(true);
        expect(textProductPlacement).toEqual(true);
    }, 50000);

    test('Search in catalog', async () => {
        await homePage.enterValueInSearchField();
        const fastSearchIsDisplayed = await homePage.fastSearchIsDisplayed();
        expect(fastSearchIsDisplayed).toEqual(true);
    }, 20000);

    test('Unsuccessful login with empty fields', async () => {
        await headerPage.moveToLoginForm();
        await loginPage.clickOnLoginButton();
        const textErrorEmail = await loginPage.getTextEmailError();
        const textErrorPassword = await loginPage.getTextPasswordError();
        expect(textErrorEmail).toEqual(loginPage.emailError);
        expect(textErrorPassword).toEqual(loginPage.passwordError);
    }, 30000);

    test("Move to People page", async () => {
        await homePage.clickOnPeopleElement();
        const backgroundColorOfPeopleButton = await peoplePage.getCssValueFromPeopleButton();
        const textPeopleHeader = await peoplePage.getTextFromPeopleHeader()
        expect(backgroundColorOfPeopleButton).toEqual(basePage.colorOfSelectedButton);
        expect(textPeopleHeader).toEqual(peoplePage.allNewsText);
    }, 30000);

    test("News dropdown", async () => {
        await headerPage.hoverCursorOverNewsButton();
        const newsDropdownIsDisplayed = await headerPage.isNewsDropdownIsDisplayed();
        expect(newsDropdownIsDisplayed).toEqual(true);
        const peopleLinkInDropdown = await homePage.getPeopleText();
        const technoLinkDropdown = await homePage.getTechnoText();
        const carLinkDropdown = await homePage.getCarText();
        const propLinkDropdown = await homePage.getPropText();
        expect(peopleLinkInDropdown).toEqual(homePage.newsTitles.People);
        expect(technoLinkDropdown).toEqual(homePage.newsTitles.Techno);
        expect(carLinkDropdown).toEqual(homePage.newsTitles.Car);
        expect(propLinkDropdown).toEqual(homePage.newsTitles.Prop);
    });

    afterAll(async () => {
        await basePage.closeBrowserTab();
        await basePage.closeBrowser();
    });
});
