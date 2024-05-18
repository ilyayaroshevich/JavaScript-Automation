//First big test (kind of E2E)
export const MainURL: string = "https://www.onliner.by/";
export const catalogLinkXpath: string = "//span[text()='Каталог' and @class = 'b-main-navigation__text']";
export const headphonesLinkXpath: string = "//a[@href = 'https://catalog.onliner.by/headphones?click_from_widget=true']";
export const linkToHeadphonesXpath: string = "(//a[contains(text(),'Наушники Marshall Major IV (черный)')])[1]";
export const buttonToAddGoodInBucketXpath: string = "//a[@data-shop-id='707' and text()='В корзину']";
export const recommendsSideBarXpath: string = "//div[@class='product-recommended__sidebar-overflow']";
export const textProductIsAddedXpath: string = "//div[contains(text(),'Товар добавлен в корзину')]";
export const textHeadphonesAfterAddedXpath: string = "//div[contains(text(),'Наушники Marshall Major IV (черный)')]";
export const productIsAddedText: string = "Товар добавлен в корзину";
export const moveToBuckedSideBarXpath: string = "//a[contains(text(),'Перейти в корзину')]";
export const continueBuyXpath: string = "//a[contains(text(),'Продолжить покупки')]";
export const reccommendedToBuyXpath: string = "//span[contains(text(),'Рекомендуем купить в магазине')]";
//Second test
export const fastSearchInputXpath: string = "//input[@class='fast-search__input']";
export const enteredTextIntoSearchField: string = 'iPhone';
export const fastSearchModalXpath: string = "//div[@id='fast-search-modal']";
//Third test
export const loginButtonXpath: string = "//div[@class = 'auth-bar__item auth-bar__item--text']";
export const buttonToLigonXpath: string = "//button[@class='auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full']";
export const emailErrorXpath: string = "//div[contains(text(),'Укажите ник')]";
export const passwordErrorXpath: string = "//div[contains(text(),'Укажите пароль')]";
export const emailError: string = "Укажите ник или e-mail";
export const passwordError: string = "Укажите пароль";
//Fourth test
export const peopleElementXpath: string = "//header[@class='b-main-page-blocks-header-2 cfix']//a[@href='https://people.onliner.by']";
export const selectedPeopleXPath: string = "//a[@href='https://people.onliner.by'] [@class='project-navigation__link project-navigation__link_primary']";
export const peopleHeaderXPath: string = "//div[@class='news-header__title']";
export const rgbaPeople: string = 'rgba(225, 225, 225, 1)';
export const textPeopleHEader: string = 'Все новости';
export const linkToPeople: string = 'https://people.onliner.by/';
//Fifth test
export const newsButtonHeaderXPath: string = "//span[@class='b-main-navigation__text'][text()='Новости']";
export const newsDropdownXpath: string = "//div[@class='b-main-navigation__dropdown b-main-navigation__dropdown_visible']";
export const peopleInDropdownXpath: string = "//a[text()='Люди'][@class='b-main-navigation__dropdown-title-link']";
export const technoDropdownXPath: string = "//a[text()='Технологии'][@class='b-main-navigation__dropdown-title-link']";
export const carDropdownXpath: string = "//a[text()='Авто'][@class='b-main-navigation__dropdown-title-link']";
export const propDropdownXpath: string = "//a[text()='Недвижимость'][@class='b-main-navigation__dropdown-title-link']";
export const textPeopleTitle: string = "Люди";
export const textCarTitle: string = "Авто";
export const textTechnoTitle: string = "Технологии";
export const textPropTitle: string = "Недвижимость";