import { expect, test } from '@playwright/test';

test('Page loads correctly and displays key elements', async ({ page }) => {
  await page.goto('/');

  await test.step('Verify the background image is visible', async () => {
    await expect(page.locator('img[alt="Test image"]')).toBeVisible();
  });

  await test.step('Verify the avatar is displayed', async () => {
    await expect(page.locator('img[alt="Test avatar"]')).toBeVisible();
  });

  await test.step('Verify the title is rendered', async () => {
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });
});