import { pages } from './steps.ts';
import { clickOnButton } from '../utils/utils.ts';

export const givenIAmOnPage = async (pageName: string) => {
    await pages[pageName].open();
};

export const whenIClickOnButtonOnPage = async (buttonName: string, pageName: string) => {
    const page = pages[pageName];
    const buttonElement = page && page[buttonName];
    await clickOnButton(buttonElement);
};


//Оставил на всякий случай. :) 

// Given(/^I am on the (\w+) page$/, async (pageName) => {
//     await pages[pageName].open();
// });

// When(/^I click on the (\w+) button on the (\w+)$/, async (buttonName, pageName,) => {
//     const page = pages[pageName];
//     const buttonElement = page && page[buttonName];
//     await clickOnButton(buttonElement);
// });