import { test, expect } from '@playwright/test';
import { runPositiveTest, runInvalidTest } from '../testHelpers.js';

test.describe.parallel('Basic characters tests', () => {
    test('First character by name', async ({ request, baseURL }) => {
        await runPositiveTest(request, baseURL, 'people', 1, 'Luke Skywalker');
    });

    test('Last character by name', async ({ request, baseURL }) => {
        await runPositiveTest(request, baseURL, 'people', 83, 'Tion Medon');
    });
});

test.describe.parallel('Invalid characters tests', () => {
    test('Character with too high number', async ({ request, baseURL }) => {
        await runInvalidTest(request, baseURL, 'people', 100);
    });

    test('Character with number 0', async ({ request, baseURL }) => {
        await runInvalidTest(request, baseURL, 'people', 0);
    });
});
