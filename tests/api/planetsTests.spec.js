import { test, expect } from '@playwright/test';
import { runPositiveTest, runInvalidTest } from '../testHelpers.js';

test.describe.parallel('Basic planets tests', () => {
    test('First planet by name', async ({ request, baseURL }) => {
        await runPositiveTest(request, baseURL, 'planets', 1, 'Tatooine');
    });

    test('Last planet by name', async ({ request, baseURL }) => {
        await runPositiveTest(request, baseURL, 'planets', 60, 'Umbara');
    });
});

test.describe.parallel('Invalid planets tests', () => {
    test('Planet with too high number', async ({ request, baseURL }) => {
        await runInvalidTest(request, baseURL, 'planets', 100);
    });

    test('Planet with number 0', async ({ request, baseURL }) => {
        await runInvalidTest(request, baseURL, 'planets', 0);
    });
});
