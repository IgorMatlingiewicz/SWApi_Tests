import { test } from '@playwright/test';
import { runCharacterTest } from '../testHelpers.js';

test.describe.parallel('Basic characters tests', () => {

    test('First character by name', async ({ request, baseURL }) => {
        await runCharacterTest(request, baseURL, 1, 'Luke Skywalker');
    });

    test('Last character by name', async ({ request, baseURL }) => {
        await runCharacterTest(request, baseURL, 83, 'Tion Medon');
    });

});

test.describe.parallel('Invalid characters tests', () => {

    test('Character with too high number', async ({ request, baseURL }) => {
        await runCharacterTest(request, baseURL, 100, '', 404);
    });

    test('Character with number 0', async ({ request, baseURL }) => {
        await runCharacterTest(request, baseURL, 0, '', 404);
    });

});
