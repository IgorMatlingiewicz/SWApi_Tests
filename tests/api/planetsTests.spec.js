// Plik z testami planets
import { test } from '@playwright/test';
import { runPlanetTest } from '../testHelpers.js';

test.describe.parallel('Planets tests', () => {

    test('First planet by name', async ({ request, baseURL }) => {
        await runPlanetTest(request, baseURL, 1, 'Tatooine');
    });

    test('Last planet by name', async ({ request, baseURL }) => {
        await runPlanetTest(request, baseURL, 60, 'Umbara');
    });

});

test.describe.parallel('Planets tests', () => {

    test('Planet with too high number', async ({ request, baseURL }) => {
        await runPlanetTest(request, baseURL, 100, '', 404);
    });

    test('Planet with number 0', async ({ request, baseURL }) => {
        await runPlanetTest(request, baseURL, 0, '', 404);
    });
});
