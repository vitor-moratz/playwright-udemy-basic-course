import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').fill('qa start marcos franco');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.locator('ytd-channel-renderer').filter({ hasText: 'Marcos Franco - Start QA' }).locator('#avatar-section').getByRole('link').click();
  await page.locator('#inner-header-container #text').click();
  await page.locator('#inner-header-container #text').click();
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.locator('#inner-header-container #text').click();
});