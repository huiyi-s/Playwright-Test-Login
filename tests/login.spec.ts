import {test,expect} from '@playwright/test'

test('valid login and toggle password visibility on local HTML page', async ({ page}) => {
    await page.goto('file:///C:/Users/HuiYiSee/Playwright/login-automation-ts/fake-login.html');

    //fill email and then password
    await page.getByPlaceholder('Email').fill('sampleName@gmail.com');
    await page.getByPlaceholder('Password').fill('Password@123!');

      
   // const type = await page.getAttribute('#password-input','type');
    //expect(type).toBe('text');

    await page.click('#login-button');
})

