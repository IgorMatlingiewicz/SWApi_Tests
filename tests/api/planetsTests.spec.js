import { test, expect } from '@playwright/test';
import { mainAPIURL } from '../main';

test.describe('Basic planets tests', () => {
  test('First planet by name', async ({ page }) => {
    const response = await page.evaluate((url) => {
      return fetch( url + 'planets/1/').then((res) => res.json());
    }, mainAPIURL);

    expect(response.name).toBe('Tatooine');
  });

  test('Last planet by name', async ({ page }) => {
    const response = await page.evaluate((url) => {
      return fetch( url + 'planets/60/').then((res) => res.json());
    }, mainAPIURL);

    expect(response.name).toBe('Umbara');
  });
})

test.describe('Non exesting planets tests', () => {
  test('Planet with too high number', async ({ page }) => {
    const response = await page.evaluate((url) => {
        return fetch(url + 'planets/100/').then((res) => res.status);
    }, mainAPIURL)
  
    expect(response).toBe(404);
  });
  
  test('Planet with number 0', async ({ page }) => {
    const response = await page.evaluate((url) => {
        return fetch(url + 'planets/0/').then((res) => res.status);
    }, mainAPIURL)
  
    expect(response).toBe(404);
  });
})
