import driver from "../driver";
import { describe, expect, test, beforeAll, afterAll, beforeEach } from '@jest/globals';
import { urls, buttons, texts, popupElements, links, inputs } from '../Constants/consts';
import { only } from "node:test";
import { By, until } from "selenium-webdriver";
import HomePage from "../Src/homePage";
import CatalogPage from "../Src/catalog";
import HeadphonesCatalog from "../Src/headphonesCatalog";
import LoginPage from "../Src/loginPage";
import PeoplePage from "../Src/peoplePage";
import HeaderPage from "../Src/headerPage";
import ProductPage from "../Src/productPage";

const homePage = new HomePage(driver)
const catalogPage = new CatalogPage(driver)
const headphonesCatalogPage = new HeadphonesCatalog(driver)
const loginPage = new LoginPage(driver)
const peoplePage = new PeoplePage(driver)
const headerPage = new HeaderPage(driver)
const productPage = new ProductPage(driver)

describe('Onliner', () => {
    beforeAll(async () => {
        await driver.manage().window().maximize();
    }, 10000);

    beforeEach(async () => {
        await driver.get(urls.mainURL);
    });
// SideBar is not displayed after adding product to Cart
    test.only('Add product to cart', async () => {
        await headerPage.findAndClickOnCatalogElementInHeader();
        await catalogPage.findAndWaitAndClickOnHeadphonesButtonInCatalog();
        await headphonesCatalogPage.findAndClickOnHeadphone();
        await productPage.findAndClickOnAddToCartButton();
        await productPage.waitSideBarAfterAddedToCart();
        const productIsAddedText = await productPage.findAndGetTextProductIsAddedOnSideBar();
        const textHeadphonesAfterAddedToCart = await productPage.findAndDisplayingNameOfHeadphones();   
        const moveToCartButtonIsDisplayed = await productPage.findAndDisplayingMoveToCartButton();
        const continueBuyButtonIsDisplayed = await productPage.findAndDisplayingContinueToBuyButton();
        const recommendedToBuyPopupIsPresent = await productPage.findAndDisplayingRecommendedToButPopup();
        expect(productIsAddedText).toContain("Товар добавлен в корзину");
        expect(moveToCartButtonIsDisplayed).toEqual(true);
        expect(continueBuyButtonIsDisplayed).toEqual(true);
        expect(recommendedToBuyPopupIsPresent).toEqual(true);
        expect(productIsAddedText).toEqual(true);
        expect(textHeadphonesAfterAddedToCart).toEqual(true);
    }, 50000);

    test('Search in catalog', async () => {
        const searchFieldInput = await homePage.findSearchFieldEnterValueAndFindFastSearchPopup()
        expect(searchFieldInput).toEqual(true);
    }, 20000);

    test('Unsuccessful login with empty fields', async () => {
        const loginButton = await driver.findElement(By.xpath(buttons.loginOnMain));
        await loginButton.click();
        const buttonToLogin = await driver.findElement(By.xpath(buttons.loginOnLoginPage));
        await buttonToLogin.click();
        await driver.wait(until.elementLocated(By.xpath(texts.emailErrorOnLoginPage)), 30000, 'Timed out after 30 sec', 1000);
        await driver.wait(until.elementLocated(By.xpath(texts.passwordErrorOnLoginPage)), 30000, 'Timed out after 30 sec', 1000);
        const errorEmail = await driver.findElement(By.xpath(texts.emailErrorOnLoginPage));
        const errorPassword = await driver.findElement(By.xpath(texts.passwordErrorOnLoginPage));
        const textErrorEmail = await errorEmail.getText();
        const textErrorPassword = await errorPassword.getText();
        expect(textErrorEmail).toContain("Укажите ник или e-mail");
        expect(textErrorPassword).toContain("Укажите пароль");
    }, 30000);

    test("Move to People page", async () => {
        const peopleLink = await driver.findElement(By.xpath(links.peopleElement));
        await peopleLink.click();
        await driver.wait(until.urlIs(urls.peopleSectionsURL), 30000, 'Timed out after 30 sec', 1000);
        const selectedPeopleButton = await driver.findElement(By.xpath(buttons.selectedPeople));
        const peopleLinkHeader = await driver.findElement(By.xpath(links.peopleHeader));
        const textPeopleHeader = await peopleLinkHeader.getText();
        const cssValueOfPeopleButton = await selectedPeopleButton.getCssValue("background-color");
        expect(cssValueOfPeopleButton).toEqual('rgba(225, 225, 225, 1)');
        expect(textPeopleHeader).toEqual('Все новости');
    }, 30000);

    test("News dropdown", async () => {
        const newsButton = await driver.findElement(By.xpath(buttons.newsInHeader));
        const actions = driver.actions({ async: true });
        await actions.move({ origin: newsButton }).perform();
        await driver.wait(until.elementLocated(By.xpath(popupElements.newsDropdown)), 30000, 'Timed out after 30 sec', 1000);
        const newsDropdownPopup = await driver.findElement(By.xpath(popupElements.newsDropdown));
        const newDropdownPopupIsVisible = await newsDropdownPopup.isDisplayed();
        expect(newDropdownPopupIsVisible).toEqual(true);
        const peopleLinkInDropdown = await driver.findElement(By.xpath(links.peopleTitle)).getText();
        const technoLinkDropdown = await driver.findElement(By.xpath(links.technoTitle)).getText();
        const carLinkDropdown = await driver.findElement(By.xpath(links.carTitle)).getText();
        const propLinkDropdown = await driver.findElement(By.xpath(links.propTitle)).getText();
        expect(peopleLinkInDropdown).toContain('Люди');
        expect(technoLinkDropdown).toContain('Технологии');
        expect(carLinkDropdown).toContain('Авто');
        expect(propLinkDropdown).toContain('Недвижимость');
    });

    afterAll(async () => {
        await driver.close();
        await driver.quit();
    });
});
