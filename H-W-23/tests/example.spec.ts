import { test } from '@playwright/test';
import { HomePage } from '../Src/pageObject/homePage';
import { HeaderPage } from '../Src/pageObject/headerPage';
import { GamesPage } from '../Src/pageObject/gamesPage';
import { SearchPage } from '../Src/pageObject/searchPage';
import { clickOnButton, enterValue } from '../Src/helpers/commonFunctions';
import { NewsPage } from '../Src/pageObject/newsPage';
import { waitForUrlSEarch } from '../Src/helpers/urls';

test.describe.configure({ mode: 'parallel', retries: 2 })

test.describe('First block', () => {

  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const homePage = new HomePage(page);
    await homePage.openPage();
  });


  test('there are buttons to social-networks', async ({ page }) => {
    const headerPage = new HeaderPage(page);
    await headerPage.buttonsHasCorrectHrefAttribute();

  });

  test('displaying crypto currency', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.cryptoCurrencyIsVisible();
  });


  test('move to Games page', async ({ page }) => {
    const homePage = new HomePage(page);
    const gamesPage = new GamesPage(page);
    await clickOnButton(page, homePage.gamesButton);
    await gamesPage.urlIsCorrect();
    await gamesPage.titleIsCorrect();
    await gamesPage.sideBarIsVisible();
    await gamesPage.colorIsCorrect();
  });

  test.only('searching on the home page', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    await enterValue(homePage.searchField, 'Смартфоны');
    await page.keyboard.press('Enter');
    await page.waitForURL(waitForUrlSEarch);
    await searchPage.urlIsCorrect();
    await searchPage.titleIsCorrect();
  });


  test('move to News page and navifate there', async ({ page }) => {
    const homePage = new HomePage(page);
    const newsPage = new NewsPage(page);
    await clickOnButton(page, homePage.newsButton);
    await newsPage.urlIsCorrect(newsPage.url);
    await newsPage.colorIsCorrect();
    await clickOnButton(page, newsPage.inPastButton);
    await page.waitForURL(newsPage.urlSecondPage);
    await newsPage.urlIsCorrect(newsPage.urlSecondPage);
    await clickOnButton(page, newsPage.inFutureButton);
    await newsPage.urlIsCorrect(newsPage.url);
    await newsPage.colorIsCorrect();
  });

});