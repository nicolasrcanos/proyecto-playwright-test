import { Page } from "@playwright/test";

export class CheckOutPageElements{
    private page: Page

    constructor(page: Page){
        this.page = page 
    }

    get inputs(){
        return{
            firstName: this.page.locator('#first-name'),
            lastName: this.page.locator('#last-name'),
            postalCode: this.page.locator('#postal-code')
        }
    }

    get buttons(){
        return{
            cancel: this.page.locator('.cart_cancel_link'),
            continue: this.page.locator('.btn_primary')
        }
    }

}