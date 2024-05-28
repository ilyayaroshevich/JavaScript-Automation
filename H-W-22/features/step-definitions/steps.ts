import { Given, When, Then, BeforeAll, AfterAll } from '@wdio/cucumber-framework';
import { expect} from '@wdio/globals'
// import { PageFactory } from '../pageFactory/pageFactory.ts';
import { clickOnButton, elementIsDisplayed } from '../../utils/utils.ts'
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
    await basePage.maximizeWindow();
});
                                                    //FOR ALL SCENARIO
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});
                                                    //FOR @1 SCENARIO
When(/^I click on the login button$/, async () => {
    await clickOnButton(await HeaderPage.loginButton);
});

Then(/^ I should make sure there is the Login field, Login button and Email button$/, async () => {
    await elementIsDisplayed(await LoginPage.inputLogin, true)
    await elementIsDisplayed(await LoginPage.loginButton, true)
    await elementIsDisplayed(await LoginPage.emailButton, true)
});
                                                    //FOR @2 SCENARIO    
When(/^I enter (.+) in the search field$/, async (film_name) => {
    await HeaderPage.enterFilmName(film_name);
});

Then(/^I see dropdown with relevant films$/, async () => {
    await elementIsDisplayed(await HeaderPage.suggestContainer, true)
});

When(/^I click on the first film in the list$/, async () => {
    await clickOnButton(await HeaderPage.searchedMovie);
});

Then(/^I should see the (.+) page$/, async (film_name) => {
    const nameOfFilmText = await FilmPage.getFilmName();
    await expect(nameOfFilmText).toEqual(film_name);
});
                                                    //FOR @3 SCENARIO
When(/^I click on the Online-cinema button$/, async () => {
    await clickOnButton(await HeaderPage.onlineCinemaButton);
});

Then(/^I should be redirected to the online-cinema page$/, async () => {
    const currentUrl = await basePage.getUrl();
    expect(currentUrl).toEqual(OnlineCinemaPage.onlineCinemaUrl);
});
                                                    //FOR @4 SCENARIO
When(/^I click on the Media button$/, async () => {
    await clickOnButton(await MainPage.mediaButton);
});

Then(/^I should be redirected to the Media page and the All_Materials button should be visible and styled in black color$/, async () => {
    const currentUrl = await basePage.getUrl();
    const cssPropertyOfAllMaterialsButton = await MediaPage.getCssPropertyFromAllMaterialsButton();
    await elementIsDisplayed(await MediaPage.allMaterialsButton, true)
    expect(cssPropertyOfAllMaterialsButton.value).toEqual(MediaPage.blackColor);
    expect(currentUrl).toEqual(MediaPage.mediaUrl);
});
                                                    //FOR @5 SCENARIO
When(/^I click on the Series button$/, async () => {
    await clickOnButton(await MainPage.seriesButton);
});

Then(/^Then I should see a page with series categories, including a visible Series button styled in gray$/, async () => {
    const textTitleList = await ListsPage.getTextFromListsTitle();
    const cssPropertyFromSeriesButton = await ListsPage.getCssPropertyFromSerialButton();
    expect(textTitleList).toEqual(ListsPage.listsText);
    await elementIsDisplayed(await ListsPage.serialButton, true)
    expect(cssPropertyFromSeriesButton.value).toEqual(ListsPage.grayColor);
});

When(/^I click on the 250 top series button$/, async () => {
    await clickOnButton(await ListsPage.top250SeriesButton);
});

Then(/^I should be redirected to the page displaying the top 250 series, and the text Top_250_Best_Series should be visible$/, async () => {
    const top250Text = await SeriesPage.getTextTop250Series();
    expect(await basePage.getUrl()).toEqual(SeriesPage.top250SeriesUrl); 
    expect(top250Text).toEqual(SeriesPage.top250BestSeriesText);
});

When(/^I click on the Breaking Bad serial$/, async () => {
    await clickOnButton(await SeriesPage.breakingBadSeries);
});

Then(/^I should be redirected to the page for the selected series Breaking_Bad with its details block displayed$/, async () => {
    const currentUrl = await basePage.getUrl();;
    expect(currentUrl).toEqual(SeriesPage.breakingBadUrl);
    await elementIsDisplayed(await SeriesPage.detailsBlockOfMovie, true)
    const BreakingBadName = await SeriesPage.getTextSerialsName();
    expect(BreakingBadName).toEqual(SeriesPage.breakingBadName);
});

AfterAll(async function () {
    await basePage.deleteSession();
});

