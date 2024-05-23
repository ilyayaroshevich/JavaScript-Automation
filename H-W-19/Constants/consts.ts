
import driver from "../driver";
import { By, until } from "selenium-webdriver";

export const urls = {
    mainURL: "https://www.onliner.by/",
    peopleSectionsURL: "https://people.onliner.by/"
};

export const buttons = {
    catalogInHeader: "//span[text()='Каталог' and @class = 'b-main-navigation__text']",
    headphonesInCatalog: "//a[@href = 'https://catalog.onliner.by/headphones?click_from_widget=true']",
    addToCart: "//a[@data-shop-id='707' and text()='В корзину']",
    moveToCart: "//a[contains(text(),'Перейти в корзину')]",
    continueToBuy: "//a[contains(text(),'Продолжить покупки')]",
    loginOnMain: "//div[@class = 'auth-bar__item auth-bar__item--text']",
    loginOnLoginPage: "//button[@class='auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full']",
    newsInHeader: "//span[@class='b-main-navigation__text'][text()='Новости']",
    selectedPeople: "//a[@href='https://people.onliner.by'] [@class='project-navigation__link project-navigation__link_primary']"
};

export const inputs = {
    searchFieldOnMain: "//input[@class='fast-search__input']"
};

export const texts = {
    productIsAdded: "//div[contains(text(),'Товар добавлен в корзину')]",
    headphonesAfterAdded: "//div[contains(text(),'Наушники Marshall Major IV (черный)')]",
    emailErrorOnLoginPage: "//div[contains(text(),'Укажите ник')]",
    passwordErrorOnLoginPage: "//div[contains(text(),'Укажите пароль')]",
};
export const popupElements = {
    sideBar: "//div[@class='product-recommended__sidebar-overflow']",
    recommendedToBuy: "//span[contains(text(),'Рекомендуем купить в магазине')]",
    fastSearchModal: "//div[@id='fast-search-modal']",
    newsDropdown: "//div[@class='b-main-navigation__dropdown b-main-navigation__dropdown_visible']",
};

export const links = {
    peopleElement: "//header[@class='b-main-page-blocks-header-2 cfix']//a[@href='https://people.onliner.by']",
    headphonesInCatalog: "(//a[contains(text(),'Наушники Marshall Major IV (черный)')])[1]",
    peopleHeader: "//div[@class='news-header__title']",
    peopleTitle: "//a[text()='Люди'][@class='b-main-navigation__dropdown-title-link']",
    technoTitle: "//a[text()='Технологии'][@class='b-main-navigation__dropdown-title-link']",
    carTitle: "//a[text()='Авто'][@class='b-main-navigation__dropdown-title-link']",
    propTitle: "//a[text()='Недвижимость'][@class='b-main-navigation__dropdown-title-link']"

}

