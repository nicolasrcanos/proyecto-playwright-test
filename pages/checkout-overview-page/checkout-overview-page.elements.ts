import { Page } from "@playwright/test";

export class CheckoutOverviewPageElements{
    private page: Page

    constructor(page: Page){
        this.page = page 
    }

   get buttons(){
        return{
            cancel: this.page.locator('.cart_cancel_link'),
            finish: this.page.locator('.btn_action')
        }
   }

}