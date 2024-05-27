export async function clickOnButton(buttonElement: WebdriverIO.Element) {
  await buttonElement.click();
}

export async function isDisplayed(element: WebdriverIO.Element): Promise<boolean> {
  return await element.isDisplayed();
}