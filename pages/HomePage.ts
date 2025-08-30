import { Page } from '@playwright/test';

export class HomePage {
     constructor(private page: Page) { }

     async goto() {
          await this.page.goto('http://www.automationpractice.pl/index.php');
     }

     async searchFor(item: string) {
          await this.page.fill('input[name="search_query"]', item);
          await this.page.click('button[name="submit_search"]');
     }
}