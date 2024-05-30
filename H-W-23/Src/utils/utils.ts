import { Page } from 'playwright';

export async function clickOnButton(page: Page, selector: any): Promise<void> {
    await page.waitForSelector(selector);
    await selector.click();
}

export async function  enterValue(page: Page, selector: any, text: string): Promise<void>{
    await page.fill(selector, text);
}