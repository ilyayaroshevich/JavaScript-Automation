import { browser } from '@wdio/globals'

export default class BasePage {

    get whiteColor() { return 'rgba(247,247,255,.9)' }

    get blackColor() { return 'rgba(0,0,0,1)' }

    get grayColor() { return 'none 0% 0% auto repeat padding-box border-box scroll rgba(0, 0, 0, 0.05)' }


}

