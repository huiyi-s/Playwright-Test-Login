import {test,expect} from '@playwright/test'

test('valid login and toggle password visibility', async ({ page}) => {
    await page.goto('https://www.facebook.com/login.php/');

    //fill email and then password
    await page.fill('//*[@id="email"]','sampleName@gmail.com');
    await page.getByPlaceholder('Password').fill('Password@123!');

})