import { Page } from "@playwright/test";
import { CheckOutPageElements } from "./checkout-page.elements";

export class CheckoutPageMethods {
    private page: Page
    private checkOutPageElements: CheckOutPageElements

    constructor(page: Page){
        this.page = page
        this.checkOutPageElements = new CheckOutPageElements(page)
    }

    async insertFirstName(firstName: string){
        await this.checkOutPageElements.inputs.firstName.fill(firstName)
    }

    async insertlastName(lastName: string){
        await this.checkOutPageElements.inputs.lastName.fill(lastName)
    }

    async insertPostalCode(postalCode: string){
        await this.checkOutPageElements.inputs.postalCode.fill(postalCode)
    }

    async clickOnCancelButton(){
        await this.checkOutPageElements.buttons.cancel.click()
    }

    async clickOnContinueButton(){
        await this.checkOutPageElements.buttons.continue.click()
    }


}