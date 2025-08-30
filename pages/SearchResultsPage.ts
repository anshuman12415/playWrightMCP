import { Page, expect } from '@playwright/test';

export class SearchResultsPage {
     constructor(private page: Page) { }

     async verifyProductVisible(productName: string) {
          // Target only products in the search results section
          const product = this.page.locator('#center_column .product-name', { hasText: productName });
          await expect(product).toBeVisible();
     }
}