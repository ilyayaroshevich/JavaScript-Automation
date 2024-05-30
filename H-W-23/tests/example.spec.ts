import { test } from '@playwright/test';
import { HomePage } from '../Src/pageObject/homePage';
import { HeaderPage } from '../Src/pageObject/headerPage';
import { GamesPage } from '../Src/pageObject/gamesPage';
import { SearchPage } from '../Src/pageObject/searchPage';
import { clickOnButton, enterValue } from '../Src/utils/utils';
import { NewsPage } from '../Src/pageObject/newsPage';
test.describe.configure({ mode: 'serial', retries: 2 })

test.describe('First block', () => {

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.openPage();
  });



  test('there are buttons to social-networks', async ({ page }) => {
    const headerPage = new HeaderPage(page);
    await headerPage.buttonsIsDisplayed();

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

  test('searching on the home page', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    await enterValue(page, homePage.searchField, 'Новости');
    await page.keyboard.press('Enter');
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
    await newsPage.urlIsCorrect(newsPage.urlSecondPage);
    await clickOnButton(page, newsPage.inFutureButton);
    await newsPage.urlIsCorrect(newsPage.url);
    await newsPage.colorIsCorrect();
  });

});