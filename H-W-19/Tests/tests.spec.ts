import { Builder, WebDriver, By, until } from "selenium-webdriver";
import { describe, expect, test, beforeAll, afterAll, beforeEach } from '@jest/globals';
import * as consts from '../Constants/consts';
import { only } from "node:test";


describe('Onliner', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();

    }, 10000);

    beforeEach(async () => {
        await driver.get(consts.MainURL);
    });

    test('Add product to bucket', async () => {
        const catalogLinkElement = await driver.findElement(By.xpath(consts.catalogLinkXpath));
        await catalogLinkElement.click();
        const headphonesCatalogLink = await driver.findElement(By.xpath(consts.headphonesLinkXpath));
        await headphonesCatalogLink.click();
        const headphonesLink = await driver.findElement(By.xpath(consts.linkToHeadphonesXpath));
        await headphonesLink.click();
        const inBucketLink = await driver.findElement(By.xpath(consts.buttonToAddGoodInBucketXpath));
        await inBucketLink.click();
        await driver.wait(until.elementLocated(By.xpath(consts.recommendsSideBarXpath)), 30000, 'Timed out after 30 sec', 1000);
        const productIsAdded = await driver.findElement(By.xpath(consts.textProductIsAddedXpath));
        const productName = await driver.findElement(By.xpath(consts.textHeadphonesAfterAddedXpath));
        const moveToBucketSideBar = await driver.findElement(By.xpath(consts.moveToBuckedSideBarXpath));
        const continueBuy = await driver.findElement(By.xpath(consts.continueBuyXpath));
        const reccommendedToBuy = await driver.findElement(By.xpath(consts.reccommendedToBuyXpath));
        const productWasAddedText = await productIsAdded.getText();
        const moveToBucketIsDisplayed = await moveToBucketSideBar.isDisplayed();
        const continueBuyIsDisplayed = await continueBuy.isDisplayed();
        const reccommendedToBuyIsPresent = await reccommendedToBuy.isDisplayed();
        const productAddedToCart = await productIsAdded.isDisplayed();
        const correctProductAddedToCart = await productName.isDisplayed();
        expect(productWasAddedText).toContain(consts.productIsAddedText);
        expect(moveToBucketIsDisplayed).toEqual(true);
        expect(continueBuyIsDisplayed).toEqual(true);
        expect(reccommendedToBuyIsPresent).toEqual(true);
        expect(productAddedToCart).toEqual(true);
        expect(correctProductAddedToCart).toEqual(true);
    }, 50000);
    test('Search in catalog', async () => {
        const searchFieldElement = await driver.findElement(By.xpath(consts.fastSearchInputXpath));
        await searchFieldElement.sendKeys(consts.enteredTextIntoSearchField);
        const fastSearchElement = await driver.findElement(By.xpath(consts.fastSearchModalXpath));
        const fastSearchIsDisplayed = await fastSearchElement.isDisplayed();
        expect(fastSearchIsDisplayed).toEqual(true);
    });
    test('Unsuccessful login with empty fields', async () => {
        const loginButtonElement = await driver.findElement(By.xpath(consts.loginButtonXpath));
        await loginButtonElement.click();
        const buttonToLigonElement = await driver.findElement(By.xpath(consts.buttonToLigonXpath));
        await buttonToLigonElement.click();
        await driver.wait(until.elementLocated(By.xpath(consts.emailErrorXpath)), 30000, 'Timed out after 30 sec', 1000);
        await driver.wait(until.elementLocated(By.xpath(consts.passwordErrorXpath)), 30000, 'Timed out after 30 sec', 1000);
        const errorEmail = await driver.findElement(By.xpath(consts.emailErrorXpath));
        const errorPassword = await driver.findElement(By.xpath(consts.passwordErrorXpath));
        const textErrorEmail = await errorEmail.getText();
        const textErrorPassword = await errorPassword.getText();
        expect(textErrorEmail).toContain(consts.emailError);
        expect(textErrorPassword).toContain(consts.passwordError);
    }, 30000);
    test("Move to People page", async () => {
        const peopleElement = await driver.findElement(By.xpath(consts.peopleElementXpath));
        await peopleElement.click();
        await driver.wait(until.urlIs(consts.linkToPeople), 30000, 'Timed out after 30 sec', 1000);
        const selectedPeopleElement = await driver.findElement(By.xpath(consts.selectedPeopleXPath));
        const peopleHeaderElement = await driver.findElement(By.xpath(consts.peopleHeaderXPath));
        const textPeopleHeaderElement = await peopleHeaderElement.getText();
        const cssValueOfPeople = await selectedPeopleElement.getCssValue("background-color");
        expect(cssValueOfPeople).toEqual(consts.rgbaPeople);
        expect(textPeopleHeaderElement).toEqual(consts.textPeopleHEader);
    }, 30000);
    test("News drop down", async () => {
        const newsDropdownElement = await driver.findElement(By.xpath(consts.newsButtonHeaderXPath));
        const actions = driver.actions({ async: true });
        await actions.move({ origin: newsDropdownElement }).perform();
        await driver.wait(until.elementLocated(By.xpath(consts.newsDropdownXpath)), 30000, 'Timed out after 30 sec', 1000);
        const newsDropdownNavigatortElement = await driver.findElement(By.xpath(consts.newsDropdownXpath));
        const newDropDownisVisible = await newsDropdownNavigatortElement.isDisplayed();
        expect(newDropDownisVisible).toEqual(true);
        const peopleInDropdownElement = await driver.findElement(By.xpath(consts.peopleInDropdownXpath)).getText();
        const technoDropdownElement = await driver.findElement(By.xpath(consts.technoDropdownXPath)).getText();
        const carDropdownElement = await driver.findElement(By.xpath(consts.carDropdownXpath)).getText();
        const propDropdownElement = await driver.findElement(By.xpath(consts.propDropdownXpath)).getText();
        expect(peopleInDropdownElement).toContain(consts.textPeopleTitle);
        expect(technoDropdownElement).toContain(consts.textTechnoTitle);
        expect(carDropdownElement).toContain(consts.textCarTitle);
        expect(propDropdownElement).toContain(consts.textPropTitle);
    })
    afterAll(async () => {
        await driver.close();
        await driver.quit();
    });
});
