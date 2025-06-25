import {test} from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageElements } from '../pages/login-page/login-page.elements'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'

test('Lgin', async({page})=>{
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageElements = new LoginPageMethods(page)

    await commonPageMethods.navigateToTheApplication()
    await loginPageElements.insertUsername('standard_user')
    await page.waitForTimeout(4000)
})