import BasePage from "./basePage";
export class ServicesPage extends BasePage {
    public url: string;
    public profileUrl:string;
    public serviceFilter_1: string;
    public serviceFilter_2: string;
    public createTaskLink: string;
    public taskButton: string;
    public profilesButton: string;

    constructor() {
        super();
        this.url = 'https://s.onliner.by/tasks';
        this.profileUrl = 'https://s.onliner.by/profiles';
        this.serviceFilter_1 = "div[class$='filter__part_1']";
        this.serviceFilter_2 = "div[class$='filter__part_2']";
        this.createTaskLink = "a[class='project-navigation__button ng-scope']";
        this.taskButton = "a[class^='project-navigation__'][href='/tasks']";
        this.profilesButton = "a[class^='project-navigation__'][href='/profiles']";
    }

    public checkThatUrlIs() {
        this.getPageUrl().should("equal", this.url)
    }
}