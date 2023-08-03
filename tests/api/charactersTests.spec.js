import { test } from '@playwright/test';
import { runPositiveCharacterTest, runInvalidCharacterTest } from '../testHelpers.js';

test.describe.parallel('Basic characters tests', () => {
    test('First character by name', async ({ request, baseURL }) => {
        await runPositiveCharacterTest(request, baseURL, 1, 'Luke Skywalker');
    });

    test('Last character by name', async ({ request, baseURL }) => {
        await runPositiveCharacterTest(request, baseURL, 83, 'Tion Medon');
    });
});

test.describe.parallel('Invalid characters tests', () => {
    test('Character with too high number', async ({ request, baseURL }) => {
        await runInvalidCharacterTest(request, baseURL, 100);
    });

    test('Character with number 0', async ({ request, baseURL }) => {
        await runInvalidCharacterTest(request, baseURL, 0);
    });
});
