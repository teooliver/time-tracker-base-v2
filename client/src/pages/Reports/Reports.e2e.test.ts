import { test, expect } from '@playwright/test';

test('Reports page snapshot test', async ({ page }) => {
  test.slow();
  // TODO: Set a base url for tests
  await page.goto('http://localhost:3000/reports');
  await page.waitForSelector('[data-testid=chart-container]');
  expect(await page.screenshot()).toMatchSnapshot('reports-page.png');
});
