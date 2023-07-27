import { test, expect } from '@playwright/test';
import { mainURL } from '../main';

test.describe('Checking changing pages functions', () => {
    test('Trying to change to site 0', async ({ page }) => {
        //given
        await page.goto(mainURL);
        await page.getByTestId('characters_link').click();

        //when
        await page.getByRole('button', { name: 'Previous' }).click();

        //then
        await expect(page.getByTestId('pageNumber')).toHaveText('1')
    });

    test('Trying to change too far', async ({ page }) => {
        //given
        await page.goto(mainURL);
        await page.getByTestId('characters_link').click();

        //when
        for (let i = 0; i < 10; i++) {
            await page.getByRole('button', { name: 'Next' }).click();
        }

        //then
        await expect(page.getByTestId('pageNumber')).toHaveText('9');
    });
})


