import { expect } from '@playwright/test';

export async function runCharacterTest(request, baseURL, id, expectedName, expectedStatus = 200) {
    const response = await request.get(`${baseURL}/people/${id}/`);
    expect(response.status()).toBe(expectedStatus);

    if (expectedStatus === 200) {
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.name).toBe(expectedName);
    }
}

export async function runPlanetTest(request, baseURL, id, expectedName, expectedStatus = 200) {
    const response = await request.get(`${baseURL}/planets/${id}/`);
    expect(response.status()).toBe(expectedStatus);

    if (expectedStatus === 200) {
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.name).toBe(expectedName);
    }
}
