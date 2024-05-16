import  {Builder, WebDriver, By, until} from "selenium-webdriver";
import { describe, expect, test } from '@jest/globals';

describe('Onliner', () => {
    test('Move to Catalog', async () => {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://www.onliner.by/");
    const mainURL = await driver.getCurrentUrl();
    const mainTitle = await driver.getTitle();
    expect(mainURL).toEqual("https://www.onliner.by/");
    expect(mainTitle).toEqual("Onlíner");
    const CatalogButton = await driver.findElement(By.xpath("//span[text()='Каталог' and @class = 'b-main-navigation__text']"));
    await driver.wait(until.elementIsVisible(CatalogButton), 10000, 'Timed out after 3 sec', 1000);
    await CatalogButton.click();
    const catalogURL = await driver.getCurrentUrl();
    const catalogTitle = await driver.getTitle();
    expect(catalogURL).toEqual("https://catalog.onliner.by/");
    expect(catalogTitle).toEqual("Каталог Onlíner");
    const catalogText = await driver.findElement(By.xpath("//h1[text()='Каталог' and @class = 'catalog-navigation__title']"));
    await driver.wait(until.elementIsVisible(catalogText), 10000, 'Timed out after 3 sec', 1000);
    const catalogTextisPresent = await catalogText.isDisplayed();
    expect(catalogTextisPresent).toEqual(true);
    await driver.close();
    await driver.quit();
}, 10000);
    });
