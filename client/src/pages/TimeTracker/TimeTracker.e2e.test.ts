import { test, expect } from '@playwright/test';

test('TimeTracker page snapshot test', async ({ page }) => {
  test.slow();
  // TODO: Set a base url for tests
  await page.goto('http://localhost:3000/');
  await page.waitForSelector('[data-testid=events-table]');
  expect(await page.screenshot()).toMatchSnapshot('time-tracker-page.png');
});
