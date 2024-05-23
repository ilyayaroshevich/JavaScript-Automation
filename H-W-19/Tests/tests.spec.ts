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
        await basePage.getUrl();
    });
    test('Add product to cart', async () => {
        await headerPage.findAndClickOnCatalogElementInHeader();
        await catalogPage.findAndWaitAndClickOnHeadphonesButtonInCatalog();
        await headphonesCatalogPage.findAndClickOnHeadphone();
        await productPage.findAndClickOnBuyNowButton();
        await orderPage.waitUntilUrl();
        const productIsDisplaying = await orderPage.findProductNameAndDisplaying();
        const textProductPlacement = await orderPage.findAndDisplayingProductPlacement();
        const curUrl = await basePage.getCurrentUrlValue();
        expect(curUrl).toEqual('https://cart.onliner.by/order');
        expect(productIsDisplaying).toEqual(true);
        expect(textProductPlacement).toEqual(true);
    }, 50000);

    test('Search in catalog', async () => {
        const searchFieldInput = await homePage.findSearchFieldEnterValueAndFindFastSearchPopup()
        expect(searchFieldInput).toEqual(true);
    }, 20000);

    test('Unsuccessful login with empty fields', async () => {
        await headerPage.moveToLoginPage();
        await loginPage.findAndClickOnLoginButton();
        const textErrorEmail = await loginPage.waitEmailErrorAndCheckTextOfError();
        const textErrorPassword = await loginPage.waitPasswordErrorAndCheckTextOfError();
        expect(textErrorEmail).toEqual("Укажите ник или e-mail");
        expect(textErrorPassword).toEqual("Укажите пароль");
    }, 30000);

    test("Move to People page", async () => {
        await homePage.findAndClickOnPeopleElementAndWaitUrl();
        const cssValueOfPeopleButton = await peoplePage.findPeopleButtonAndGetCssValue();
        const textPeopleHeader = await peoplePage.findPeopleLinkAndGetText()
        expect(cssValueOfPeopleButton).toEqual('rgba(225, 225, 225, 1)');
        expect(textPeopleHeader).toEqual('Все новости');
    }, 30000);

    test("News dropdown", async () => {
        await homePage.findNewsButtonAndHoverCursorOverIt();
        const newDropdownPopupIsDisplayed = await homePage.waitNewDropdownIsLocatedandDisplayingIt();
        expect(newDropdownPopupIsDisplayed).toEqual(true);
        const peopleLinkInDropdown = await homePage.findPeopleLinkInDropdownAndGetText();
        const technoLinkDropdown = await homePage.findCarLinkInDropdownAndGetText();
        const carLinkDropdown = await homePage.findTechnoLinkInDropdownAndGetText();
        const propLinkDropdown = await homePage.findPropLinkInDropdownAndGetText();
        expect(peopleLinkInDropdown).toContain('Люди');
        expect(technoLinkDropdown).toContain('Технологии');
        expect(carLinkDropdown).toContain('Авто');
        expect(propLinkDropdown).toContain('Недвижимость');
    });

    afterAll(async () => {
        await basePage.closeBrowserTab();
        await basePage.closeBrowser();
    });
});
