import { test, expect } from '@playwright/test';
import { HomePage } from '../Src/pageObject/homePage';
import { HeaderPage } from '../Src/pageObject/headerPage';
import { GamesPage } from '../Src/pageObject/gamesPage';


test.describe.configure({ mode: 'serial', retries: 2 })

test.describe('First block', () => {

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.openPage();
  });



  test('there are buttons to social-networks', async ({ page }) => {
    const headerPage = new HeaderPage(page);
    await headerPage.buttonsIsDisplayed();

  });


 

});