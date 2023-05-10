import { test, expect } from '@playwright/test'

test('has greeting', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const h1Locator = page.locator('h1');

    await expect(h1Locator).toHaveText('Hello, Next.js!');
});