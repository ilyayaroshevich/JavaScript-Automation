import { Page } from 'playwright';

export async function clickOnButton(page: Page, selector: any): Promise<void> {
    await selector.click();
}

export async function  enterValue(selector: any, text: string): Promise<void>{
    await selector.fill(text);
}