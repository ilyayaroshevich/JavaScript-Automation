import { Given, When, Then, BeforeAll, AfterAll } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.ts';
import MainPage from '../pageobjects/main.page.ts';
import FilmPage from '../pageobjects/film.page.ts';
import HeaderPage from '../pageobjects/header.page.ts';
import ListsPage from '../pageobjects/lists.page.ts';
import MediaPage from '../pageobjects/media.page.ts';
import OnlineCinemaPage from '../pageobjects/onlineCinema.page.ts';
import SeriesPage from '../pageobjects/series.page.ts';
import headerPage from '../pageobjects/header.page.ts';
import loginPage from '../pageobjects/login.page.ts';


const pages = {
    login: LoginPage,
    main: MainPage,
    film: FilmPage,
    lists: ListsPage,
    media: MediaPage,
    series: SeriesPage,
    onlineCinema: OnlineCinemaPage,
    headerPage: HeaderPage,
}

BeforeAll(async function () {
    await browser.maximizeWindow();

});

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()

});

When(/^I click on the login button$/, async () => {
    await headerPage.clickOnLoginButton();
});

Then(/^I should see the login page$/, async () => {
    const loginFieldisDisplayed = await loginPage.inputLoginFieldIsDisplayed();
    const loginBUttonIsDisplayed = await loginPage.loginButtonIsDisplayed();
    const emailButtonIsDisplayed = await loginPage.emailButtonIsDIsplayed();
    await expect(loginFieldisDisplayed).toEqual(true);
    await expect(loginBUttonIsDisplayed).toEqual(true);
    await expect(emailButtonIsDisplayed).toEqual(true);
});

When(/^I click on the Search field and enter the (.+)$/, async (film_name) => {
    await HeaderPage.clickOnSearchfield();
    await HeaderPage.enterFilmName(film_name)
});

Then(/^I see dropdown with relevant films$/, async () => {
    const suggestionDropdownIsDisplayed = await HeaderPage.suggestionDropdownIsDisplayed();
    await expect(suggestionDropdownIsDisplayed).toEqual(true);
});

When(/^I click on the first film in the list$/, async () => {
    await HeaderPage.clickOnFirstFilmOfList();
});

Then(/^I should see the page about selected (.+)$/, async (film_name) => {
    const nameOfFilmText = await FilmPage.getFilmName();
    await expect(nameOfFilmText).toEqual(film_name)
});

// AfterAll(async function () {
//     await browser.deleteSession();
// });

