export const urls: { mainURL: string, peopleSectionsURL: string } = {
    mainURL: "https://www.onliner.by/",
    peopleSectionsURL: "https://people.onliner.by/"
};

export const buttons: {
    catalogInHeaderXpath: string, headphonesInCatalogXpath: string, addToCartXpath: string, moveToCartXpath: string, continueToBuyXpath: string,
    loginOnMainXpath: string, loginOnLoginPageXpath: string, newsInHeaderXpath: string, selectedPeopleXPath: string
} = {
    catalogInHeaderXpath: "//span[text()='Каталог' and @class = 'b-main-navigation__text']",
    headphonesInCatalogXpath: "//a[@href = 'https://catalog.onliner.by/headphones?click_from_widget=true']",
    addToCartXpath: "//a[@data-shop-id='707' and text()='В корзину']",
    moveToCartXpath: "//a[contains(text(),'Перейти в корзину')]",
    continueToBuyXpath: "//a[contains(text(),'Продолжить покупки')]",
    loginOnMainXpath: "//div[@class = 'auth-bar__item auth-bar__item--text']",
    loginOnLoginPageXpath: "//button[@class='auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full']",
    newsInHeaderXpath: "//span[@class='b-main-navigation__text'][text()='Новости']",
    selectedPeopleXPath: "//a[@href='https://people.onliner.by'] [@class='project-navigation__link project-navigation__link_primary']"
};

export const inputs: { searchFieldOnMain: string } = {
    searchFieldOnMain: "//input[@class='fast-search__input']"
};

export const texts: {
    productIsAddedXpath: string, headphonesAfterAddedXpath: string, emailErrorOnLoginPageXpath: string, passwordErrorOnLoginPageXpath: string
} = {
    productIsAddedXpath: "//div[contains(text(),'Товар добавлен в корзину')]",
    headphonesAfterAddedXpath: "//div[contains(text(),'Наушники Marshall Major IV (черный)')]",
    emailErrorOnLoginPageXpath: "//div[contains(text(),'Укажите ник')]",
    passwordErrorOnLoginPageXpath: "//div[contains(text(),'Укажите пароль')]",
};
export const popupElements: { sideBarXpath: string, recommendedToBuyXpath: string, fastSearchModalXpath: string, newsDropdownXpath: string } = {
    sideBarXpath: "//div[@class='product-recommended__sidebar-overflow']",
    recommendedToBuyXpath: "//span[contains(text(),'Рекомендуем купить в магазине')]",
    fastSearchModalXpath: "//div[@id='fast-search-modal']",
    newsDropdownXpath: "//div[@class='b-main-navigation__dropdown b-main-navigation__dropdown_visible']",
};

export const links: {peopleElementXpath: string, headphonesInCatalogXpath:string, peopleHeaderXpath: string, peopleTitleXpath: string, technoTitleXpath: string,
    carTitleXpath: string, propTitleXpath: string
 } ={
    peopleElementXpath: "//header[@class='b-main-page-blocks-header-2 cfix']//a[@href='https://people.onliner.by']",
    headphonesInCatalogXpath: "(//a[contains(text(),'Наушники Marshall Major IV (черный)')])[1]",
    peopleHeaderXpath: "//div[@class='news-header__title']",
    peopleTitleXpath: "//a[text()='Люди'][@class='b-main-navigation__dropdown-title-link']",
    technoTitleXpath: "//a[text()='Технологии'][@class='b-main-navigation__dropdown-title-link']",
    carTitleXpath: "//a[text()='Авто'][@class='b-main-navigation__dropdown-title-link']",
    propTitleXpath: "//a[text()='Недвижимость'][@class='b-main-navigation__dropdown-title-link']"

}

