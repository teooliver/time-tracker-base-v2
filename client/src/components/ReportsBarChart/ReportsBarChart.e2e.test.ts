import { test, expect } from '@playwright/test';

// test('basic test', async ({ page }) => {
//   await page.goto('http://192.168.0.48:3000/');
//   await page.locator('text=Welcome to Remix').click();
//   await expect(page).toHaveTitle(/New Remix App/);
// });

// example.spec.ts

test('snapshot test', async ({ page }) => {
  test.slow();
  // TODO: Set a base url for tests
  await page.goto('http://localhost:3000/reports');
  await page.waitForSelector('#chart-container');
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
});
