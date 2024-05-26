import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/loginPage';
import MainPage from '../pageobjects/mainPage';
import FilmPage from '../pageobjects/filmPage';
import HeaderPage from '../pageobjects/headerPage';
import ListsPage from '../pageobjects/listsPage';
import MediaPage from '../pageobjects/mediaPage';
import OnlineCinemaPage from '../pageobjects/onlineCinemaPage';
import SeriesPage from '../pageobjects/seriesPage';


const pages = {
    login: LoginPage,
    main: MainPage,
    film: FilmPage,
    lists: ListsPage,
    media: MediaPage,
    series: SeriesPage,
    onlineCinema: OnlineCinemaPage
}


Given(/^I am on the (.+) page$/, async (page) => {
    await pages[page].open()
});

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

