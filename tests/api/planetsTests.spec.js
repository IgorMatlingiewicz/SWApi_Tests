import { test } from '@playwright/test';
import { runPositivePlanetTest, runInvalidPlanetTest } from '../testHelpers.js';

test.describe.parallel('Basic planets tests', () => {
    test('First planet by name', async ({ request, baseURL }) => {
        await runPositivePlanetTest(request, baseURL, 1, 'Tatooine');
    });

    test('Last planet by name', async ({ request, baseURL }) => {
        await runPositivePlanetTest(request, baseURL, 60, 'Umbara');
    });
});

test.describe.parallel('Invalid planets tests', () => {
    test('Planet with too high number', async ({ request, baseURL }) => {
        await runInvalidPlanetTest(request, baseURL, 100);
    });

    test('Planet with number 0', async ({ request, baseURL }) => {
        await runInvalidPlanetTest(request, baseURL, 0);
    });
});
