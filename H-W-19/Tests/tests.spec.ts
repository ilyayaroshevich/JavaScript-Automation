import { Builder, WebDriver, By, until } from "selenium-webdriver";
import { describe, expect, test } from '@jest/globals';
import { catalogLinkXpath, expectedCatalogURL, expectedCatalogTitle, expectedCatalogHeaderTextXpath, expectedMainURL} from '../Constants/consts';

describe('Onliner', () => {
    let driver: WebDriver;
    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.get(expectedMainURL);
    });

    async function navigateToCatalog() {
        const catalogLink = await driver.findElement(By.xpath(catalogLinkXpath));
        await driver.wait(until.elementIsVisible(catalogLink), 10000, 'Timed out after 1 sec', 1000);
        await driver.wait(until.elementIsEnabled(catalogLink), 10000, 'Timed out after 1 sec', 1000);
        await catalogLink.click();
        await driver.wait(until.urlIs(expectedCatalogURL), 10000, 'Timed out after 1 sec', 1000);
    };

    test('Move to Catalog', async () => {
        await navigateToCatalog();
        const catalogTitle = await driver.getTitle();
        expect(catalogTitle).toEqual(expectedCatalogTitle);
        const catalogHeaderText = await driver.findElement(By.xpath(expectedCatalogHeaderTextXpath));
        await driver.wait(until.elementIsVisible(catalogHeaderText), 10000, 'Timed out after 3 sec', 1000);
        const catalogHeaderTextIsPresent = await catalogHeaderText.isDisplayed();
        expect(catalogHeaderTextIsPresent).toEqual(true);
    }, 10000);

    afterAll(async () => {
        await driver.close();
        await driver.quit();
    });
});
