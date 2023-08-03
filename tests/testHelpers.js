import { expect } from '@playwright/test';

export async function runPositiveCharacterTest(request, baseURL, id, expectedName) {
    const response = await request.get(`${baseURL}/people/${id}/`);
    expect(response.status()).toBe(200);

    const responseBody = JSON.parse(await response.text());
    expect(responseBody.name).toBe(expectedName);
}

export async function runInvalidCharacterTest(request, baseURL, id) {
    const response = await request.get(`${baseURL}/people/${id}/`);
    expect(response.status()).toBe(404);
}

export async function runPositivePlanetTest(request, baseURL, id, expectedName) {
    const response = await request.get(`${baseURL}/planets/${id}/`);
    expect(response.status()).toBe(200);

    const responseBody = JSON.parse(await response.text());
    expect(responseBody.name).toBe(expectedName);
}

export async function runInvalidPlanetTest(request, baseURL, id) {
    const response = await request.get(`${baseURL}/planets/${id}/`);
    expect(response.status()).toBe(404);
}
