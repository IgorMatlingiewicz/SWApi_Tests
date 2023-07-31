import { test, expect } from '@playwright/test';
import { baseUrl } from '../main';

// const baseUrl = "https://swapi.dev/api/"

test.describe.parallel('Basic characters tests', () => {

    test.only('First character by name', async ({ request }) => {
        const response = await request.get(baseUrl + `people/1/`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        expect(responseBody.name).toBe('Luke Skywalker')
    })

    test.only('Last character by name', async ({ request }) => {
        const response = await request.get(baseUrl + `people/83/`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        expect(responseBody.name).toBe('Tion Medon')
    })
})

test.describe.parallel('Invalid characters tests', () => {

    test.only('Character with too high number', async ({ request }) => {
        const response = await request.get(baseUrl + `people/100/`)
        expect(response.status()).toBe(404)
    })

    test.only('Character with number 0', async ({ request }) => {
        const response = await request.get(baseUrl + `people/0/`)
        expect(response.status()).toBe(404)
    })
})