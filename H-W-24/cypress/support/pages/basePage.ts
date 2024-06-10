
export default class BasePage {
    public url: string;
    
    constructor(){
    }
    
    public openPage(){
        cy.visit(this.url)
    }
    }
