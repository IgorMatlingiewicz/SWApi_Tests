import { test, expect } from '@playwright/test';

test.describe.parallel('Basic characters tests', () => {

    test('First character by name', async ({ request, baseURL }) => {
        const response = await request.get(`${baseURL}/people/1/`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        expect(responseBody.name).toBe('Luke Skywalker')
    })

    test('Last character by name', async ({ request, baseURL }) => {
        const response = await request.get(`${baseURL}/people/83/`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        expect(responseBody.name).toBe('Tion Medon')
    })
})

test.describe.parallel('Invalid characters tests', () => {

    test('Character with too high number', async ({ request, baseURL }) => {
        const response = await request.get(`${baseURL}/people/100/`)
        expect(response.status()).toBe(404)
    })

    test('Character with number 0', async ({ request, baseURL }) => {
        const response = await request.get(`${baseURL}/people/0/`)
        expect(response.status()).toBe(404)
    })
})