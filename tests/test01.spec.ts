import {test, expect} from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { LoginPageData } from '../pages/login-page/login-page.data'
import { ProductsPageMethods } from '../pages/products-page/product-page.methods';
import { CartPageMethods } from '../pages/cart-page/cart-page.methods';
import { CheckoutOverviewPageMethods } from '../pages/checkout-overview-page/checkout-overview-page.methods';
import { CheckoutPageMethods } from '../pages/checkout-page/checkout-page.methods';

const userCredentials = LoginPageData.credentials;

test('Lgin', async ({ page }) =>{
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    const productsPageMethods = new ProductsPageMethods(page)
    const cartPageMethods = new CartPageMethods(page)
    const checkoutPageMethods = new CheckoutPageMethods(page)
    const checkoutOverviewPageMethods = new CheckoutOverviewPageMethods(page)

    await commonPageMethods.navigateToTheApplication()
    await loginPageMethods.insertUsername(userCredentials.usernames.standardUser)
    await loginPageMethods.insertPassword(userCredentials.password.password)
    await loginPageMethods.clickOnLoginButton()
    await productsPageMethods.clickOnAddToCart('Sauce Labs Backpack')
    await page.waitForTimeout(1000)
    await productsPageMethods.clickOnCartIcon()
    await page.waitForTimeout(1000)
    //await cartPageMethods.clickOnRemoveButton('Sauce Labs Backpack')
    await cartPageMethods.clickOnCheckoutButton()
    await checkoutPageMethods.insertFirstName('Nico')
    await checkoutPageMethods.insertlastName('Cano')
    await checkoutPageMethods.insertPostalCode('1757')
    await checkoutPageMethods.clickOnContinueButton()
    await page.waitForTimeout(1000)
    //await checkoutOverviewPageElements.clickOnCancelButton()
    await checkoutOverviewPageMethods.clickOnFinishButton()
    await page.waitForTimeout(2000)
    await expect(page.locator('.complete-header')).toContainText('THANK YOU FOR YOUR ORDER')
    //await cartPageMethods.clickOnContinueShoppingButton()
    //await commonPageMethods.openMenu()
    await page.waitForTimeout(4000)
})