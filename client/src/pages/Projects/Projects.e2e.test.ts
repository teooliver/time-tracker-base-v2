import { test, expect } from '@playwright/test';

test('Projects page snapshot test', async ({ page }) => {
  test.slow();
  // TODO: Set a base url for tests
  await page.goto('http://localhost:3000/projects');
  await page.waitForSelector('[data-testid=projects-table]');
  expect(await page.screenshot()).toMatchSnapshot('reports-page.png');
});
