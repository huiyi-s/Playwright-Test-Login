import {test,expect, mergeExpects} from '@playwright/test'

test('login page testing', async ({ page}) => {
    await page.goto('https://huiyi-s.github.io/Playwright-Test-Login/');

    //fill email and then password
    await page.getByPlaceholder('Email').fill('sampleName@gmail.com');
    await page.getByPlaceholder('Password').fill('Password@123!');

      
   // const type = await page.getAttribute('#password-input','type');
    //expect(type).toBe('text');

    await page.getByPlaceholder('Login').click();
    const message =page.locator('#message');
  //  await expect(message).toBeVisible();
    await expect(message).toHaveText('Login successful!');
});

