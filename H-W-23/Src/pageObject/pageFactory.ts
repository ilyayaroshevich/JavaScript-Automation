import { HomePage } from "./homePage";
import { GamesPage } from "./gamesPage";
import { HeaderPage } from "./headerPage";
import { NewsPage } from "./newsPage";
import { SearchPage } from "./searchPage";
import { BasePage } from "./basePage";
import { Page } from "playwright";

export class PageFactory {
    static getPage(page: Page, pageName: string) {
        switch (pageName) {
            case "Home":
                return new HomePage(page);
            case "Games":
                return new GamesPage(page);
            case "Header":
                return new HeaderPage(page);
            case "News":
                return new NewsPage(page);
            case "Search":
                return new SearchPage(page);
            default:
                return new BasePage(page);
        };
    };
};