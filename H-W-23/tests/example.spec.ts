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


test.describe('3DNews.ru', () => {
  let homePage: HomePage;
  let headerPage: HeaderPage;
  let gamesPage: GamesPage;
  let searchPage: SearchPage;
  let newsPage: NewsPage;

  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    homePage = PageFactory.getPage(page, 'Home') as HomePage;
    headerPage = PageFactory.getPage(page, 'Header') as HeaderPage;
    gamesPage = PageFactory.getPage(page, 'Games') as GamesPage;
    searchPage = PageFactory.getPage(page, 'Search') as SearchPage;
    newsPage = PageFactory.getPage(page, 'News') as NewsPage;
    await homePage.openPage();
  });

  test('Test 1: Verify social network buttons href attributes', async ({ page }) => {
    await headerPage.buttonsHasCorrectHrefAttribute();

  });

  test('Test 2: Verify displaying crypto currency', async ({ page }) => {
    await homePage.cryptoCurrencyIsVisible();
  });

  test('Test 3: Move to Games page and verify elements', async ({ page }) => {
    await clickOnButton(page, homePage.gamesButton);
    await gamesPage.urlIsCorrect();
    await gamesPage.titleIsCorrect();
    await gamesPage.sideBarIsVisible();
    await gamesPage.colorIsCorrect();
  });

  test('Test 4: Search on the home page and verify results', async ({ page }) => {
    await enterValue(homePage.searchField, 'Смартфоны');
    await page.keyboard.press('Enter');
    await page.waitForURL(waitForUrlSEarch);
    await searchPage.urlIsCorrect();
    await searchPage.titleIsCorrect();
  });

  test('Test 5: Move to News page and navigate there', async ({ page }) => {
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