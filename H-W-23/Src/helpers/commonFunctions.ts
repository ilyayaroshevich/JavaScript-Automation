import { Page } from 'playwright';
import { expect} from '@playwright/test'

export async function clickOnButton(page: Page, selector: any): Promise<void> {
    await selector.click();
};

export async function  enterValue(selector: any, text: string): Promise<void>{
    await selector.fill(text);
};

export async function  countOfChildElements(selector: any, expectedAmountOfElements: number, foundElement:string ){
    await selector.waitFor({ state: 'visible' });
    const countsOfchildSelectors = await selector.locator(foundElement).count();
    expect(countsOfchildSelectors).toBe(expectedAmountOfElements);
};