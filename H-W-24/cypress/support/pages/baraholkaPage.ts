import BasePage from "./basePage";
export class BaraholkaPage extends BasePage {
public url:string;
public fleaMarketButton:string;
constructor(){
    super();
    this.url='https://baraholka.onliner.by/';
    this.fleaMarketButton=".b-btn-fleamarket__1";

}    

public checkThatUrlIs() {
    this.getPageUrl().should("equal", this.url)
}

}