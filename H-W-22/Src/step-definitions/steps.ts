import { When, Then, BeforeAll, AfterAll } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import { urlIs } from 'selenium-webdriver/lib/until';
// import { PageFactory } from '../pageFactory/pageFactory.ts';
import { elementIsDisplayed, getTextIsEqual } from '../helpers/commonFunctions.ts';
import { blackColor, grayColor } from '../helpers/colors.ts';
import './commonSteps.ts';

//PageObject
import LoginPage from '../pageobjects/login.page.ts';
import MainPage from '../pageobjects/main.page.ts';
import FilmPage from '../pageobjects/film.page.ts';
import HeaderPage from '../pageobjects/header.page.ts';
import ListsPage from '../pageobjects/lists.page.ts';
import MediaPage from '../pageobjects/media.page.ts';
import OnlineCinemaPage from '../pageobjects/onlineCinema.page.ts';
import SeriesPage from '../pageobjects/series.page.ts';
import BasePage from '../pageobjects/base.page.ts';

// PageFactory
// const HeaderPage = PageFactory.getPage(browser, "HeaderPage");
// const FilmPage = PageFactory.getPage(browser, "FilmPage");
// const ListsPage = PageFactory.getPage(browser, "ListsPage");
// const LoginPage = PageFactory.getPage(browser, "LoginPage");
// const MainPage = PageFactory.getPage(browser, "MainPage");
// const MediaPage = PageFactory.getPage(browser, "MediaPage");
// const OnlineCinemaPage = PageFactory.getPage(browser, "OnlineCinemaPage");
// const SeriesPage = PageFactory.getPage(browser, "SeriesPage");
const basePage = new BasePage();

export const pages = {
    login: LoginPage,
    main: MainPage,
    film: FilmPage,
    lists: ListsPage,
    media: MediaPage,
    series: SeriesPage,
    onlineCinema: OnlineCinemaPage,
    header: HeaderPage,
};

BeforeAll(async function () {
    await basePage.maximizeWindow();
});

Then(/^I should validate that login form displaying correctly$/, async () => {
    await elementIsDisplayed(await LoginPage.inputLogin, true)
    await elementIsDisplayed(await LoginPage.loginButton, true)
    await elementIsDisplayed(await LoginPage.emailButton, true)
});
When(/^I enter (.+) in the search field$/, async (film_name) => {
    await HeaderPage.enterFilmName(film_name);
});

Then(/^I see dropdown with relevant films$/, async () => {
    await browser.pause(1000);                                  //<=== Это вынужденный pause. Без него клик происходит по неправильному элементу.
                                                                //Перепробовал разные вэйтеры и обращалс як chatgpt. Но знаю, что нужно избегать.
    await elementIsDisplayed(await HeaderPage.suggestContainer, true)
});

Then(/^I should see the (.+) page$/, async (film_name) => {
    await getTextIsEqual(await FilmPage.filmName, film_name);
});

Then(/^I should be redirected to the online-cinema page$/, async () => {
    const currentUrl = await basePage.getUrl();
    expect(currentUrl).toEqual(OnlineCinemaPage.onlineCinemaUrl);
});

Then(/^I should be redirected to the Media page$/, async () => {
    const currentUrl = await basePage.getUrl();
    expect(currentUrl).toEqual(MediaPage.mediaUrl);
});

Then(/^All_Materials button should be visible$/, async () => {
    await elementIsDisplayed(await MediaPage.allMaterialsButton, true)
});

Then(/^All_Materials button styled in black$/, async () => {
    const cssPropertyOfAllMaterialsButton = await MediaPage.getCssPropertyFromAllMaterialsButton();
    expect(cssPropertyOfAllMaterialsButton.value).toEqual(blackColor);
});

Then(/^I should see a page with series categories$/, async () => {
    await getTextIsEqual(await ListsPage.listsTitle, ListsPage.listsText);
});

Then(/^Series button is visible$/, async () => {
    await elementIsDisplayed(await ListsPage.serialButton, true)
});

Then(/^Series button is styled in gray$/, async () => {
    const cssPropertyFromSeriesButton = await ListsPage.getCssPropertyFromSerialButton();
    expect(cssPropertyFromSeriesButton.value).toEqual(grayColor);
});


Then(/^I should be redirected to the top 250 series page$/, async () => {
    await browser.waitUntil(async () => {
        const currentUrl = await basePage.getUrl();
        expect(currentUrl).toBe(SeriesPage.top250SeriesUrl);
        return true;
    }, {
        timeout: 5000});
});


Then(/^The text Top 250 Best Series is correct$/, async () => {
    await getTextIsEqual(await SeriesPage.top250SeriesTitle, SeriesPage.top250BestSeriesText);

});

Then(/^I should be redirected to the Breaking Bad page$/, async () => {
    const currentUrl = await basePage.getUrl();;
    expect(currentUrl).toEqual(SeriesPage.breakingBadUrl);
    await getTextIsEqual(await SeriesPage.serialName, SeriesPage.breakingBadName);
});

Then(/^Details block is displayed$/, async () => {
    await elementIsDisplayed(await SeriesPage.detailsBlockOfMovie, true)

});

AfterAll(async function () {
    await basePage.deleteSession();
});

