import BasePage from "./basePage";
export class ForumPage extends BasePage {
    public url: string;
    public importantTopics: string;

    constructor() {
        super();
        this.url = 'https://forum.onliner.by/';
        this.importantTopics = "div[class='h-hottopics']>ul[class='b-list-topics']";
}
public checkAmountOfInportantTopicks(expectedCount:number){
    cy.get(this.importantTopics)
        .children()
        .its('length')
        .should('eq', expectedCount)
}

}