import { expect, browser} from '@wdio/globals'

export async function clickOnButton(buttonElement: WebdriverIO.Element, waitForClickable: boolean = false) {
  if (waitForClickable) {
    await buttonElement.waitForClickable();
  }
  await buttonElement.click();
}

export async function elementIsDisplayed(element: WebdriverIO.Element, expected: boolean): Promise<void> {
  const actual = await element.isDisplayed();
  expect(actual).toEqual(expected);
};

export async function getTextIsEqual(element: WebdriverIO.Element, expectedText: string): Promise<void> {
  await browser.waitUntil(async () => {
      const actual = await element.getText();
      expect(actual).toEqual(expectedText); 
      return true; 
  }, {
      timeout: 5000, 
  });
}