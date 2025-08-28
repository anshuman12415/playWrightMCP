import { test, expect } from '@playwright/test';

test('Search for T-shirts and verify Faded Short Sleeve T-shirts appears', async ({ page }) => {
     // Step 1: Navigate to the website
     await page.goto('http://www.automationpractice.pl/index.php');

     // Step 2: Search for 'T-shirts'
     await page.fill('#search_query_top', 'T-shirts');
     await Promise.all([
          page.waitForNavigation({ waitUntil: 'networkidle' }),
          page.click('button[name="submit_search"]'),
     ]);

     // Step 3: Verify the product is in the list
     const productLink = page.getByRole('link', { name: 'Faded Short Sleeve T-shirts' });
     await expect(productLink.nth(2)).toBeVisible();
});