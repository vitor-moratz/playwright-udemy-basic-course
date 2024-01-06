import { expect, test } from '@playwright/test';
import exp from 'constants';

test('Ações básicas',async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/forgot_password');
    const emailInput = page.locator('input#email');
    await emailInput.fill('startqa@hotmail.com');
    await emailInput.fill('');
    await emailInput.pressSequentially('123456');
    await expect(emailInput).toHaveValue('123456');

    //page.click()
    await page.goto('https://the-internet.herokuapp.com/');
    const checkboxesLink = page.locator('a[href="/checkboxes"]');
    await checkboxesLink.click();

    //checkboxes
    const checkbox1 = page.locator('input[type="checkbox"]').nth(0);
    
    // 'nth' é um método utilizado para localizar um elemento específico quanto tem mais de um elemento localizado

    await checkbox1.check();
    const checkbox2 = page.locator('input[type="checkbox"]').nth(1);
    await checkbox2.uncheck();

    await expect(checkbox2).not.toBeChecked();
    await expect(checkbox1).toBeChecked();   
})

test('Ações básicas 2',async ({ page }) => {
    // dropdowns
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    const dropdown = page.locator('select#dropdown')
    await dropdown.selectOption('1')
    await expect(dropdown).toHaveValue('1')
    await dropdown.selectOption({ label: 'Option 2'})
    await expect(dropdown).toHaveValue('2')

    // hover
    await page.goto('https://the-internet.herokuapp.com/hovers')
    const img0 = page.locator('div.figure').nth(0)
    const img1 = page.locator('div.figure').nth(1)
    const img2 = page.locator('div.figure').nth(2)

    const imgInfo0 = img0.locator('.figcaption')
    const imgInfo1 = img1.locator('.figcaption')
    const imgInfo2 = img2.locator('.figcaption')

    await img0.hover()
    await expect(img0).toBeVisible()
    await img1.hover()
    await expect(img1).toBeVisible()
    await img2.hover()
    await expect(img2).toBeVisible()
    
    await imgInfo2.getByRole('link').click()
    // await imgInfo2.locator('a')

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/users/3')

})
