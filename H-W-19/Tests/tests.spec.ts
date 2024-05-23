import driver from "../driver";
import { describe, expect, test, beforeAll, afterAll, beforeEach } from '@jest/globals';
import { only } from "node:test";
import HomePage from "../Src/pageObjects/homePage";
import CatalogPage from "../Src/pageObjects/catalog";
import HeadphonesCatalog from "../Src/pageObjects/headphonesCatalog";
import LoginPage from "../Src/pageObjects/loginPage";
import PeoplePage from "../Src/pageObjects/peoplePage";
import HeaderPage from "../Src/pageObjects/headerPage";
import ProductPage from "../Src/pageObjects/productPage";
import BasePage from "../Src/pageObjects/basePage";
import OrderPlacementPage from "../Src/pageObjects/orderPlacementPage";

const basePage = new BasePage(driver);
const homePage = new HomePage(driver)
const catalogPage = new CatalogPage(driver)
const headphonesCatalogPage = new HeadphonesCatalog(driver)
const loginPage = new LoginPage(driver)
const peoplePage = new PeoplePage(driver)
const headerPage = new HeaderPage(driver)
const productPage = new ProductPage(driver)
const orderPage = new OrderPlacementPage(driver)

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
