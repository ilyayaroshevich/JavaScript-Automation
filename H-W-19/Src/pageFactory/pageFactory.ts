// import { WebDriver } from "selenium-webdriver";
// import HomePage from "../pageObjects/homePage";
// import CatalogPage from "../pageObjects/catalog";
// import HeadphonesCatalogPage from "../pageObjects/headphonesCatalog";
// import LoginPage from "../pageObjects/loginPage";
// import PeoplePage from "../pageObjects/peoplePage";
// import HeaderPage from "../pageObjects/headerPage";
// import ProductPage from "../pageObjects/productPage";
// import BasePage from "../pageObjects/basePage";
// import OrderPlacementPage from "../pageObjects/orderPlacementPage";

// export class PageFactory {
//     static getPage(driver: WebDriver, pageName: string) {
//         switch (pageName) {
//             case "HomePage":
//                 return new HomePage(driver);
//             case "HeaderPage":
//                 return new HeaderPage(driver);
//             case "LoginPage":
//                 return new LoginPage(driver);
//             case "ProductPage":
//                 return new ProductPage(driver);
//             case "OrderPlacementPage":
//                 return new OrderPlacementPage(driver);
//             case "Peopleage":
//                 return new PeoplePage(driver);
//             case "CatalogPage":
//                 return new CatalogPage(driver);
//             case "HeadphonesCatalogPage":
//                 return new HeadphonesCatalogPage(driver);
//             default:
//                 return new BasePage(driver);
//         };
//     };
// };