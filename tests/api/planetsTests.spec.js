import { test, expect } from '@playwright/test';


test.describe.parallel('Basic planets tests', () => {

  test('First planet by name', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/planets/1/`)
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    expect(responseBody.name).toBe('Tatooine')
  })

  test('Last planet by name', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/planets/60/`)
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    expect(responseBody.name).toBe('Umbara')
  })
})

test.describe.parallel('Invalid planets tests', () => {

  test('Planet with too high number', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/planets/100/`)
    expect(response.status()).toBe(404)
  })

  test('Planet with number 0', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/planets/0/`)
    expect(response.status()).toBe(404)
  })
})


// import { baseUrl } from '../main';

// const baseUrl = "https://swapi.dev/api/"