import LoginPage from '../pageobjects/login.page.ts';
import MainPage from '../pageobjects/main.page.ts';
import FilmPage from '../pageobjects/film.page.ts';
import HeaderPage from '../pageobjects/header.page.ts';
import ListsPage from '../pageobjects/lists.page.ts';
import MediaPage from '../pageobjects/media.page.ts';
import OnlineCinemaPage from '../pageobjects/onlineCinema.page.ts';
import SeriesPage from '../pageobjects/series.page.ts';
import BasePage from '../pageobjects/base.page.ts';

export class PageFactory {
    static getPage(browser: WebdriverIO.Browser, pageName: string): any {
    switch (pageName) {
      case "LoginPage":
        return new LoginPage();
      case "MainPage":
        return new MainPage();
      case "FilmPage":
        return new FilmPage();
      case "HeaderPage":
        return new HeaderPage();
      case "ListsPage":
        return new ListsPage();
      case "MediaPage":
        return new MediaPage();
      case "OnlineCinemaPage":
        return new OnlineCinemaPage();
      case "SeriesPage":
        return new SeriesPage();
      default:
        throw new Error(`Unknown page: ${pageName}`);
    }
  }
}