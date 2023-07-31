import { test, expect } from '@playwright/test';
import { baseUrl } from '../main';

// const baseUrl = "https://swapi.dev/api/"

test.describe.parallel('Basic planets tests', () => {

  test.only('First planet by name', async ({ request }) => {
    const response = await request.get(baseUrl + `planets/1/`)
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    expect(responseBody.name).toBe('Tatooine')
  })

  test.only('Last planet by name', async ({ request }) => {
    const response = await request.get(baseUrl + `planets/60/`)
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    expect(responseBody.name).toBe('Umbara')
  })
})

test.describe.parallel('Invalid planets tests', () => {

  test.only('Planet with too high number', async ({ request }) => {
    const response = await request.get(baseUrl + `planets/100/`)
    expect(response.status()).toBe(404)
  })

  test.only('Planet with number 0', async ({ request }) => {
    const response = await request.get(baseUrl + `planets/0/`)
    expect(response.status()).toBe(404)
  })
})
