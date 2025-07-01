import {test} from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { LoginPageData } from '../pages/login-page/login-page.data'
import { ProductsPageMethods } from '../pages/products-page/product-page.methods';
import { CartPageMethods } from '../pages/cart-page/cart-page.methods';

const userCredentials = LoginPageData.credentials;

test('Lgin', async ({ page }) =>{
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    const productsPageMethods = new ProductsPageMethods(page)
    const cartPageMethods = new CartPageMethods(page)

    await commonPageMethods.navigateToTheApplication()
    await loginPageMethods.insertUsername(userCredentials.usernames.standardUser)
    await loginPageMethods.insertPassword(userCredentials.password.password)
    await loginPageMethods.clickOnLoginButton()
    await productsPageMethods.clickOnAddToCart('Sauce Labs Backpack')
    await page.waitForTimeout(4000)
    await productsPageMethods.clickOnCartIcon()
    await page.waitForTimeout(4000)
    await cartPageMethods.clickOnRemoveButton('Sauce Labs Backpack')
    //await cartPageMethods.clickOnCheckoutButton()
    //await cartPageMethods.clickOnContinueShoppingButton()
    //await commonPageMethods.openMenu()
    await page.waitForTimeout(4000)
})