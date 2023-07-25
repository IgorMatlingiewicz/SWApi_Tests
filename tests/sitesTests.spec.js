import { test, expect } from '@playwright/test';

test.describe('Checking if main sites work correctly', () => {
    test('Checking characters site', async ({ page }) => {
      await page.goto('https://my-starwarsapi-site.netlify.app/html/menu.html');
      await page.getByTestId('characters_link').click();
      await page.getByTestId('site_header').click();

      await expect(page.getByTestId('site_header')).toHaveText('Characters')
    });
    
    test('Checking planets site', async ({ page }) => {
      await page.goto('https://my-starwarsapi-site.netlify.app/html/menu.html');
      await page.getByTestId('planets_link').click();
      await page.getByTestId('site_header').click();

      await expect(page.getByTestId('site_header')).toHaveText('Planets')
    });

})
