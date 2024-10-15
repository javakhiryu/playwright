import {test} from 'playwright/test';

test('Basic Navigation', async ({page}) => {
    await page.goto('https://gitlab.com/');
    await page.waitForTimeout(3000);
    await page.reload();
})

test( 'Interacting with Web Element on Gitlab', async ({page}) => {
    await page.goto('https://gitlab.com/');
    await page.click(`//*[local-name()='svg'][@aria-labelledby="tanukiHomeDesktop"]`);
    await page.locator('//a[@name="Get free trial"]').click();
    await page.getByTestId('new-user-first-name-field').fill('John');
    await page.getByTestId('new-user-last-name-field').fill('Doe');
})

test("Using Various Locator Methods", async ({page}) => {
    await page.goto('https://gitlab.com/');
    //await page.click(`//*[local-name()='svg'][@aria-labelledby="tanukiHomeDesktop"]`); //Gitlab logo button
    //await page.locator(`(//*[name()='svg'])[33]`).click();
    await page.click(':has-text("Sign in")')
    await page.waitForTimeout(3000);
})

