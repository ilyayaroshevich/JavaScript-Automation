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
        const catalogButtonInHeader = await driver.findElement(By.xpath(buttons.catalogInHeader));
        await catalogButtonInHeader.click();
        const headphonesButtonInCatalog = await driver.findElement(By.xpath(buttons.headphonesInCatalog));
        await headphonesButtonInCatalog.click();
        const headphonesLinkInCatalog = await driver.findElement(By.xpath(links.headphonesInCatalog));
        await headphonesLinkInCatalog.click();
        const addToCartButton = await driver.findElement(By.xpath(buttons.addToCart));
        await addToCartButton.click();
        await driver.wait(until.elementLocated(By.xpath(popupElements.sideBar)), 30000, 'Timed out after 30 sec', 1000);
        const productIsAddedText = await driver.findElement(By.xpath(texts.productIsAdded));
        const headphonesTextAfterAddedToCart = await driver.findElement(By.xpath(texts.headphonesAfterAdded));
        const moveToCartButton = await driver.findElement(By.xpath(buttons.moveToCart));
        const continueBuyButton = await driver.findElement(By.xpath(buttons.continueToBuy));
        const recommendedToBuyPopup = await driver.findElement(By.xpath(popupElements.recommendedToBuy));
        const textProductIsAdded = await productIsAddedText.isDisplayed();
        const textHeadphonesAfterAddedToCart = await headphonesTextAfterAddedToCart.isDisplayed();
        const moveToCartButtonIsDisplayed = await moveToCartButton.isDisplayed();
        const continueBuyButtonIsDisplayed = await continueBuyButton.isDisplayed();
        const recommendedToBuyPopupIsPresent = await recommendedToBuyPopup.isDisplayed();
        expect(productIsAddedText.getText()).toContain("Товар добавлен в корзину");
        expect(moveToCartButtonIsDisplayed).toEqual(true);
        expect(continueBuyButtonIsDisplayed).toEqual(true);
        expect(recommendedToBuyPopupIsPresent).toEqual(true);
        expect(textProductIsAdded).toEqual(true);
        expect(textHeadphonesAfterAddedToCart).toEqual(true);
    }, 50000);
    
    test('Search in catalog', async () => {
        const searchFieldInput = await driver.findElement(By.xpath(inputs.searchFieldOnMain));
        await searchFieldInput.sendKeys('iPhone');
        const fastSearchPopup = await driver.findElement(By.xpath(popupElements.fastSearchModal));
        const fastSearchPopupIsDisplayed = await fastSearchPopup.isDisplayed();
        expect(fastSearchPopupIsDisplayed).toEqual(true);
    });
    
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
