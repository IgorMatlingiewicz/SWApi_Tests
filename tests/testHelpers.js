import { test, expect } from '@playwright/test';

export async function runPositiveTest(request, baseURL, endpoint, id, expectedName) {
    const response = await request.get(`${baseURL}/${endpoint}/${id}/`);
    expect(response.status()).toBe(200);

    const responseBody = JSON.parse(await response.text());
    expect(responseBody.name).toBe(expectedName);
}

export async function runInvalidTest(request, baseURL, endpoint, id) {
    const response = await request.get(`${baseURL}/${endpoint}/${id}/`);
    expect(response.status()).toBe(404);
}
