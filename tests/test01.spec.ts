import {test} from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'

test('Lgin', async({page})=>{
    const commonPageMethods = new CommonPageMethods(page)
    await commonPageMethods.navigateToTheApplication()
})