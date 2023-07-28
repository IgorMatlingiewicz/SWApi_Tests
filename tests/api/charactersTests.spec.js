import { test, expect } from '@playwright/test';
import { mainAPIURL } from '../main';


test.describe('Basic characters tests', () => {
  test('First character by name', async ({ page }) => {
    const response = await page.evaluate((url) => {
      return fetch( url + 'people/1/').then((res) => res.json());
    }, mainAPIURL);

    expect(response.name).toBe('Luke Skywalker');
  });

  test('Last character by name', async ({ page }) => {
    const response = await page.evaluate((url) => {
      return fetch( url + 'people/83/').then((res) => res.json());
    }, mainAPIURL);

    expect(response.name).toBe('Tion Medon');
  });
})

test.describe('Non existing characters tests', () => {
  test('Character with too high number', async ({ page }) => {
    const response = await page.evaluate((url) => {
      return fetch(url + 'people/100/').then((res) => res.status);
    }, mainAPIURL);

    expect(response).toBe(404);
  });

  test('Character with number 0', async ({ page }) => {
    const response = await page.evaluate((url) => {
      return fetch(url + 'people/0/').then((res) => res.status);
    }, mainAPIURL);

    expect(response).toBe(404);
  });
})
