import { Given, When, Then, BeforeAll, AfterAll } from '@wdio/cucumber-framework';
import { expect, browser } from '@wdio/globals'
import { PageFactory } from '../pageFactory/pageFactory.ts';

// import LoginPage from '../pageobjects/login.page.ts';
// import MainPage from '../pageobjects/main.page.ts';
// import FilmPage from '../pageobjects/film.page.ts';
// import HeaderPage from '../pageobjects/header.page.ts';
// import ListsPage from '../pageobjects/lists.page.ts';
// import MediaPage from '../pageobjects/media.page.ts';
// import OnlineCinemaPage from '../pageobjects/onlineCinema.page.ts';
// import SeriesPage from '../pageobjects/series.page.ts';

const HeaderPage = PageFactory.getPage(browser, "HeaderPage");
const FilmPage = PageFactory.getPage(browser, "FilmPage");
const ListsPage = PageFactory.getPage(browser, "ListsPage");
const LoginPage = PageFactory.getPage(browser, "LoginPage");
const MainPage = PageFactory.getPage(browser, "MainPage");
const MediaPage = PageFactory.getPage(browser, "MediaPage");
const OnlineCinemaPage = PageFactory.getPage(browser, "OnlineCinemaPage");
const SeriesPage = PageFactory.getPage(browser, "SeriesPage");

const pages = {
    login: LoginPage,
    main: MainPage,
    film: FilmPage,
    lists: ListsPage,
    media: MediaPage,
    series: SeriesPage,
    onlineCinema: OnlineCinemaPage,
    headerPage: HeaderPage,
};

BeforeAll(async function () {
    await browser.maximizeWindow();
});

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I click on the login button$/, async () => {
    await HeaderPage.clickOnLoginButton();
});

Then(/^I should see the login page$/, async () => {
    const loginFieldisDisplayed = await LoginPage.inputLoginFieldIsDisplayed();
    const loginBUttonIsDisplayed = await LoginPage.loginButtonIsDisplayed();
    const emailButtonIsDisplayed = await LoginPage.emailButtonIsDIsplayed();
    await expect(loginFieldisDisplayed).toEqual(true);
    await expect(loginBUttonIsDisplayed).toEqual(true);
    await expect(emailButtonIsDisplayed).toEqual(true);
});

When(/^I click on the Search field and enter the (.+)$/, async (film_name) => {
    await HeaderPage.enterFilmName(film_name);
});

Then(/^I see dropdown with relevant films$/, async () => {
    const suggestionDropdownIsDisplayed = await HeaderPage.suggestionContainerIsDisplayed();
    await expect(suggestionDropdownIsDisplayed).toEqual(true);
});

When(/^I click on the first film in the list$/, async () => {
    await HeaderPage.clickOnFirstFilmOfList();
});

Then(/^I should see the page about selected (.+)$/, async (film_name) => {
    const nameOfFilmText = await FilmPage.getFilmName();
    await expect(nameOfFilmText).toEqual(film_name);
});

When(/^I click on the Online-cinema button$/, async () => {
    await HeaderPage.clickOnOnlineCinemaButton();
});

Then(/^I should see Online-cinema page$/, async () => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual(OnlineCinemaPage.onlineCinemaUrl);
});

When(/^I click on the Media button$/, async () => {
    await MainPage.clickOnMediaButton();
});

Then(/^I should see the Media page$/, async () => {
    const currentUrl = await browser.getUrl();
    const allMaterialsButtonIsDIsplayed = await MediaPage.allMaterialsIsDisplayed();
    const cssPropertyOfAllMaterialsButton = await MediaPage.getCssPropertyFromAllMaterialsButton();
    expect(allMaterialsButtonIsDIsplayed).toEqual(true);
    expect(cssPropertyOfAllMaterialsButton.value).toEqual(MediaPage.blackColor);
    expect(currentUrl).toEqual(MediaPage.mediaUrl);
});

When(/^I click on the Series button$/, async () => {
    await MainPage.clickOnSeriesButton();
});

Then(/^I should see the page with list of series categories$/, async () => {
    const textTitleList = await ListsPage.getTextFromListsTitle();
    const seriesButtonIsDisplayed = await ListsPage.serialButtonIsDisplayed();
    const cssPropertyFromSeriesButton = await ListsPage.getCssPropertyFromSerialButton();
    expect(textTitleList).toEqual(ListsPage.listsText);
    expect(seriesButtonIsDisplayed).toEqual(true);
    expect(cssPropertyFromSeriesButton.value).toEqual(ListsPage.grayColor);
});

When(/^I click on the 250 top series button$/, async () => {
    await ListsPage.clickOnTop250SeriesButton();
});

Then(/^I should see the page with 250 top series$/, async () => {
    // const currentUrlSeries = await browser.getUrl(); 

    //I do not know why it is not working
    //Expected: "https://www.kinopoisk.ru/lists/movies/series-top250/"
    //Received: "https://www.kinopoisk.ru/lists/categories/movies/3/"
    // It works normally if I put the “getUrl” function in the “expected” function as shown below 
    const top250Text = await SeriesPage.getTextTop250Series();
    expect(await browser.getUrl()).toEqual(SeriesPage.top250SeriesUrl); /*<=======*/
    expect(top250Text).toEqual(SeriesPage.top250BestSeriesText);
});

When(/^I click on the Breaking Bad serial$/, async () => {
    await SeriesPage.clickOnBreakinBadSeries();
});

Then(/^I should see the page with selected series$/, async () => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual(SeriesPage.breakingBadUrl);
    const detailsBlockIsDisplayed = await SeriesPage.serialsDetailsIsDisplayed();
    expect(detailsBlockIsDisplayed).toEqual(true);
    const BreakingBadName = await SeriesPage.getTextSerialsName();
    expect(BreakingBadName).toEqual(SeriesPage.breakingBadName);
});

AfterAll(async function () {
    await browser.deleteSession();
});

