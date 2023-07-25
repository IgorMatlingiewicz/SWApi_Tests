import { test, expect } from '@playwright/test';

test.describe('Checking changing pages functions', () => {
    test('Trying to change to site 0', async ({ page }) => {
        await page.goto('https://my-starwarsapi-site.netlify.app/html/menu.html');
        await page.getByTestId('characters_link').click();
        await page.getByRole('button', { name: 'Previous' }).click();

        await expect(page.getByTestId('pageNumber')).toHaveText('1')
    });

    test('Trying to change too far', async ({ page }) => {
        await page.goto('https://my-starwarsapi-site.netlify.app/html/menu.html');
        await page.getByTestId('characters_link').click();
        for (let i = 0; i < 10; i++) {
            await page.getByRole('button', { name: 'Next' }).click();
        }

        await expect(page.getByTestId('pageNumber')).toHaveText('9');
    });
})


