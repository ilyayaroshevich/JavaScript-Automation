import { test } from '@playwright/test';
import { HomePage } from '../Src/pageObject/homePage';
import { HeaderPage } from '../Src/pageObject/headerPage';
import { GamesPage } from '../Src/pageObject/gamesPage';
import { SearchPage } from '../Src/pageObject/searchPage';
import { clickOnButton, enterValue } from '../Src/helpers/commonFunctions';
import { NewsPage } from '../Src/pageObject/newsPage';
import { waitForUrlSEarch } from '../Src/helpers/urls';
import { PageFactory } from '../Src/pageObject/pageFactory';

test.describe.configure({ mode: 'parallel', retries: 2 })


test.describe('First block', () => {

  test.beforeEach(async ({ page}) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page,'Home') as HomePage;
    await homePage.openPage();
  });


  test('social network buttons have correct href attributes', async ({ page }) => {
    // const headerPage = new HeaderPage(page);
    const headerPage = PageFactory.getPage(page, 'Header') as HeaderPage;
    await headerPage.buttonsHasCorrectHrefAttribute();

  });

  test('displaying crypto currency', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page,'Home') as HomePage;
    await homePage.cryptoCurrencyIsVisible();
  });


  test('move to Games page', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page,'Home') as HomePage;
    const gamesPage = PageFactory.getPage(page,'Games') as GamesPage;
    // const gamesPage = new GamesPage(page);
    await clickOnButton(page, homePage.gamesButton);
    await gamesPage.urlIsCorrect();
    await gamesPage.titleIsCorrect();
    await gamesPage.sideBarIsVisible();
    await gamesPage.colorIsCorrect();
  });

  test('searching on the home page', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page,'Home') as HomePage;
    const searchPage = PageFactory.getPage(page,'Search') as SearchPage;
    // const searchPage = new SearchPage(page);
    await enterValue(homePage.searchField, 'Смартфоны');
    await page.keyboard.press('Enter');
    await page.waitForURL(waitForUrlSEarch);
    await searchPage.urlIsCorrect();
    await searchPage.titleIsCorrect();
  });


  test('move to News page and navigate there', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page,'Home') as HomePage;
    const newsPage = PageFactory.getPage(page,'News') as NewsPage;
    // const newsPage = new NewsPage(page);
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