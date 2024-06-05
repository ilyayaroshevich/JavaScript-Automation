// cypress/support/index.ts

declare namespace Cypress {
    interface Chainable<Subject = any> {
        clickOnNavigationBarLink(linkSelector: string): Chainable<Subject>;
        checkThatUrlIs(expectedUrl: string): Chainable<Subject>;
        elementIsExistAndVisible(element: string): Chainable<Subject>;
        getTextFromElementIs(element: string, expectedText: string): Chainable<Subject>;
        getCssValueFromElement(element: string, nameOfCssValue: string, expectedCssValue: string): Chainable<Subject>;
    }
}

Cypress.Commands.add('clickOnNavigationBarLink', (linkSelector: string) => {
    cy.get(linkSelector).click();
});

Cypress.Commands.add('checkThatUrlIs', (expectedUrl: string) => {
    cy.url().should('equal', expectedUrl);
});

Cypress.Commands.add('elementIsExistAndVisible', (element: string) => {
    cy.get(element).should('exist').and('be.visible');
});

Cypress.Commands.add('getTextFromElementIs', (element: string, expectedText: string) => {
    cy.get(element).should('have.text', expectedText);
});

Cypress.Commands.add('getCssValueFromElement', (element: string, nameOfCssValue: string, expectedCssValue: string) => {
    cy.get(element).should('have.css', nameOfCssValue, expectedCssValue);
});