import { Builder, WebDriver, By, until } from "selenium-webdriver";
import { describe, expect, test, beforeAll, afterAll, beforeEach } from '@jest/globals';
import { urls, buttons, texts, popupElements, links, inputs } from '../Constants/consts';
import { only } from "node:test";


describe('Onliner', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();

    }, 10000);

    beforeEach(async () => {
        await driver.get(urls.mainURL);
    });

    test('Add product to cart', async () => {
        const catalogButtonInHeaderElement = await driver.findElement(By.xpath(buttons.catalogInHeaderXpath));
        await catalogButtonInHeaderElement.click();
        const headphonesButtonInCatalog = await driver.findElement(By.xpath(buttons.headphonesInCatalogXpath));
        await headphonesButtonInCatalog.click();
        const headphonesLinkInCatalog = await driver.findElement(By.xpath(links.headphonesInCatalogXpath));
        await headphonesLinkInCatalog.click();
        const inCartButton = await driver.findElement(By.xpath(buttons.addToCartXpath));
        await inCartButton.click();
        await driver.wait(until.elementLocated(By.xpath(popupElements.sideBarXpath)), 30000, 'Timed out after 30 sec', 1000);
        const productIsAddedTextElement = await driver.findElement(By.xpath(texts.productIsAddedXpath));
        const headphonesTextAfterAddedElement = await driver.findElement(By.xpath(texts.headphonesAfterAddedXpath));
        const moveToCartButtonElement = await driver.findElement(By.xpath(buttons.moveToCartXpath));
        const continueBuyButtonElement = await driver.findElement(By.xpath(buttons.continueToBuyXpath));
        const recommendedToBuyPupupElement = await driver.findElement(By.xpath(popupElements.recommendedToBuyXpath));
        const productIsAddedText = await productIsAddedTextElement.getText();
        const moveToCartIsDisplayed = await moveToCartButtonElement.isDisplayed();
        const continueBuyIsDisplayed = await continueBuyButtonElement.isDisplayed();
        const recommendedToBuyIsPresent = await recommendedToBuyPupupElement.isDisplayed();
        const productAddedToCart = await productIsAddedTextElement.isDisplayed();
        const correctProductAddedToCart = await headphonesTextAfterAddedElement.isDisplayed();
        expect(productIsAddedText).toContain("Товар добавлен в корзину");
        expect(moveToCartIsDisplayed).toEqual(true);
        expect(continueBuyIsDisplayed).toEqual(true);
        expect(recommendedToBuyIsPresent).toEqual(true);
        expect(productAddedToCart).toEqual(true);
        expect(correctProductAddedToCart).toEqual(true);
    }, 50000);
    test('Search in catalog', async () => {
        const searchFieldInputElement = await driver.findElement(By.xpath(inputs.searchFieldOnMain));
        await searchFieldInputElement.sendKeys('iPhone');
        const fastSearchPopupElement = await driver.findElement(By.xpath(popupElements.fastSearchModalXpath));
        const fastSearchIsDisplayed = await fastSearchPopupElement.isDisplayed();
        expect(fastSearchIsDisplayed).toEqual(true);
    });
    test('Unsuccessful login with empty fields', async () => {
        const loginButtonElement = await driver.findElement(By.xpath(buttons.loginOnMainXpath));
        await loginButtonElement.click();
        const buttonToLoginElement = await driver.findElement(By.xpath(buttons.loginOnLoginPageXpath));
        await buttonToLoginElement.click();
        await driver.wait(until.elementLocated(By.xpath(texts.emailErrorOnLoginPageXpath)), 30000, 'Timed out after 30 sec', 1000);
        await driver.wait(until.elementLocated(By.xpath(texts.passwordErrorOnLoginPageXpath)), 30000, 'Timed out after 30 sec', 1000);
        const errorEmail = await driver.findElement(By.xpath(texts.emailErrorOnLoginPageXpath));
        const errorPassword = await driver.findElement(By.xpath(texts.passwordErrorOnLoginPageXpath));
        const textErrorEmail = await errorEmail.getText();
        const textErrorPassword = await errorPassword.getText();
        expect(textErrorEmail).toContain("Укажите ник или e-mail");
        expect(textErrorPassword).toContain("Укажите пароль");
    }, 30000);
    test("Move to People page", async () => {
        const peopleLinkElement = await driver.findElement(By.xpath(links.peopleElementXpath));
        await peopleLinkElement.click();
        await driver.wait(until.urlIs(urls.peopleSectionsURL), 30000, 'Timed out after 30 sec', 1000);
        const selectedPeopleButtonElement = await driver.findElement(By.xpath(buttons.selectedPeopleXPath));
        const peopleLinkHeaderElement = await driver.findElement(By.xpath(links.peopleHeaderXpath));
        const textPeopleHeaderElement = await peopleLinkHeaderElement.getText();
        const cssValueOfPeople = await selectedPeopleButtonElement.getCssValue("background-color");
        expect(cssValueOfPeople).toEqual('rgba(225, 225, 225, 1)');
        expect(textPeopleHeaderElement).toEqual('Все новости');
    }, 30000);
    test("News drop down", async () => {
        const newsButtonElement = await driver.findElement(By.xpath(buttons.newsInHeaderXpath));
        const actions = driver.actions({ async: true });
        await actions.move({ origin: newsButtonElement }).perform();
        await driver.wait(until.elementLocated(By.xpath(popupElements.newsDropdownXpath)), 30000, 'Timed out after 30 sec', 1000);
        const newsDropdownPopupElement = await driver.findElement(By.xpath(popupElements.newsDropdownXpath));
        const newDropdownPopupIsVisible = await newsDropdownPopupElement.isDisplayed();
        expect(newDropdownPopupIsVisible).toEqual(true);
        const peopleLinkInDropdownElement = await driver.findElement(By.xpath(links.peopleTitleXpath)).getText();
        const technoLinkDropdownElement = await driver.findElement(By.xpath(links.technoTitleXpath)).getText();
        const carLinkDropdownElement = await driver.findElement(By.xpath(links.carTitleXpath)).getText();
        const propLinkDropdownElement = await driver.findElement(By.xpath(links.propTitleXpath)).getText();
        expect(peopleLinkInDropdownElement).toContain('Люди');
        expect(technoLinkDropdownElement).toContain('Технологии');
        expect(carLinkDropdownElement).toContain('Авто');
        expect(propLinkDropdownElement).toContain('Недвижимость');
    })
    afterAll(async () => {
        await driver.close();
        await driver.quit();
    });
});
