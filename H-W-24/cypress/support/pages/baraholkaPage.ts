import BasePage from "./basePage";
export class BaraholkaPage extends BasePage {
public url:string;
public fleaMarketButton:string;
constructor(){
    super();
    this.url='https://baraholka.onliner.by/';
    this.fleaMarketButton= "a[href^='/fle']>span";

}    

}