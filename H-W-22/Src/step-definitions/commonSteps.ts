import { clickOnButton } from '../helpers/commonFunctions.ts';
import { Given, When } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.ts';
import MainPage from '../pageobjects/main.page.ts';
import FilmPage from '../pageobjects/film.page.ts';
import HeaderPage from '../pageobjects/header.page.ts';
import ListsPage from '../pageobjects/lists.page.ts';
import MediaPage from '../pageobjects/media.page.ts';
import OnlineCinemaPage from '../pageobjects/onlineCinema.page.ts';
import SeriesPage from '../pageobjects/series.page.ts';

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

Given(/^I am on the (\w+) page$/, async (pageName) => {
    await pages[pageName].open();
});

When(/^I click on the (\w+) button on the (\w+)$/, async (buttonName, pageName,) => {
    const page = pages[pageName];
    const buttonElement = page && page[buttonName];
    await clickOnButton(buttonElement);
});