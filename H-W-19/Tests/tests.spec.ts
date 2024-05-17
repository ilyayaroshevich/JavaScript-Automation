import { Builder, WebDriver, By, until } from "selenium-webdriver";
import { describe, expect, test, beforeAll, afterAll } from '@jest/globals';
import {
    catalogLinkXpath, MainURL, headphonesLinkXpath, linkToHeadphonesXpath, buttonToAddGoodInBucketXpath,
    recommendsSideBarXpath, textProductIsAddedXpath, textHeadphonesAfterAddedXpath, productIsAddedText,
    moveToBuckedSideBarXpath, continueBuyXpath, reccommendedToBuyXpath
} from '../Constants/consts';


describe('Onliner', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.get(MainURL);
    }, 10000);

    test('Add product to bucket', async () => {
        const catalogLinkElement = await driver.findElement(By.xpath(catalogLinkXpath));
        await catalogLinkElement.click();
        const headphonesCatalogLink = await driver.findElement(By.xpath(headphonesLinkXpath));
        await headphonesCatalogLink.click();
        const headphonesLink = await driver.findElement(By.xpath(linkToHeadphonesXpath));
        await headphonesLink.click();
        const inBucketLink = await driver.findElement(By.xpath(buttonToAddGoodInBucketXpath));
        await inBucketLink.click();
        await driver.wait(until.elementLocated(By.xpath(recommendsSideBarXpath)), 30000, 'Timed out after 10 sec', 1000);
        const productIsAdded = await driver.findElement(By.xpath(textProductIsAddedXpath));
        const productName = await driver.findElement(By.xpath(textHeadphonesAfterAddedXpath));
        const moveToBucketSideBar = await driver.findElement(By.xpath(moveToBuckedSideBarXpath));
        const continueBuy = await driver.findElement(By.xpath(continueBuyXpath));
        const reccommendedToBuy = await driver.findElement(By.xpath(reccommendedToBuyXpath));
        const productIsAddedText = await productIsAdded.getText();
        const moveToBucketIsDisplayed = await moveToBucketSideBar.isDisplayed();
        const continueBuyIsDisplayed = await continueBuy.isDisplayed();
        const reccommendedToBuyIsPresent = await reccommendedToBuy.isDisplayed();
        const productAddedToCart = await productIsAdded.isDisplayed();
        const correctProductAddedToCart = await productName.isDisplayed();
        expect(productIsAddedText).toContain(productIsAddedText);
        expect(moveToBucketIsDisplayed).toEqual(true);
        expect(continueBuyIsDisplayed).toEqual(true);
        expect(reccommendedToBuyIsPresent).toEqual(true);
        expect(productAddedToCart).toEqual(true);
        expect(correctProductAddedToCart).toEqual(true);
    }, 50000);
    test('Search in catalog', async () => {
        const searchElement = await driver.findElement(By.xpath("//input[@class='fast-search__input']"));
        const inputTextInSearchField = await searchElement.sendKeys('iPhone');
        const fastSearchElement = await driver.findElement(By.xpath("//div[@id='fast-search-modal']"));
        const fastSearchIsDisplayed = await fastSearchElement.isDisplayed();
        expect(fastSearchIsDisplayed).toEqual(true);


    })
    afterAll(async () => {
        await driver.close();
        await driver.quit();
    });
});
