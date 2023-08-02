import { test, expect } from '@playwright/test';

const WebBaseURL = 'https://my-starwarsapi-site.netlify.app/html/menu.html';

test.describe('Checking if main sites work correctly', () => {
  test('Checking characters site', async ({ page }) => {
    // given
    await page.goto(WebBaseURL);

    // when
    await page.getByTestId('characters_link').click();
    await page.getByTestId('site_header').click();

    // then
    await expect(page.getByTestId('site_header')).toHaveText('Characters');
  });

  test('Checking planets site', async ({ page }) => {
    // given
    await page.goto(WebBaseURL);

    // when
    await page.getByTestId('planets_link').click();
    await page.getByTestId('site_header').click();

    // then
    await expect(page.getByTestId('site_header')).toHaveText('Planets');
  });
});
