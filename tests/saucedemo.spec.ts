import test, { expect } from "@playwright/test";

test('Localizando por data-test',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('Moratz');
    // 'getByTestId' é uma forma de localizar um elemento e pode ser configurado em 'playwright.config.ts
});

test('Asserts básicos',async ({ page }) => {
    // 'page' é um dos vários objetos que tem para utilização no playwright
    await page.goto('https://www.saucedemo.com/');
    const loginButton = await page.locator('input#login-button');
    await expect.soft(loginButton).toHaveCSS('background-color','rgb(61, 220, 145)');
    // 'soft' faz com que mesmo havendo erro, prossiga nos testes e falhe apenas no fim, ou seja rodando todas as outras validações
    await expect(loginButton).toHaveAttribute('value','Login');
    await expect(loginButton).toBeVisible();
    await expect(loginButton).not.toBeHidden();
})