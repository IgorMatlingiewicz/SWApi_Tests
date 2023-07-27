import { test, expect } from '@playwright/test';
import { mainURL } from '../main';

test.describe('Checking if main sites work correctly', () => {
  test('Checking characters site', async ({ page }) => {
    // given
    await page.goto(mainURL);

    // when
    await page.getByTestId('characters_link').click();
    await page.getByTestId('site_header').click();

    // then
    await expect(page.getByTestId('site_header')).toHaveText('Characters');
  });

  test('Checking planets site', async ({ page }) => {
    // given
    await page.goto(mainURL);

    // when
    await page.getByTestId('planets_link').click();
    await page.getByTestId('site_header').click();

    // then
    await expect(page.getByTestId('site_header')).toHaveText('Planets');
  });
});
