import { expect} from '@wdio/globals'

export async function clickOnButton(buttonElement: WebdriverIO.Element) {
  await buttonElement.click();
}

export async function elementIsDisplayed(element: WebdriverIO.Element, expected: boolean): Promise<void> {
  const actual = await element.isDisplayed();
  expect(actual).toEqual(expected);
};