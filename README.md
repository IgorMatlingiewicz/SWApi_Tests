# Automatic tests for my StarWarsApi site
Project that is used for testing my StarWarsApi site, and its functions.<br>
It was made for learning purposes, and to show my abilities of working with Playwright.<br>
It has tests like checking if sites are loading correctly.
## Links
- StarWarsApi repository https://github.com/IgorMatlingiewicz/StarWarsApi
- StarWarsApi site https://my-starwarsapi-site.netlify.app

## Commands
- record tests for given site  
`npx playwright codegen https://my-starwarsapi-site.netlify.app`
- run tests without browser GUI  
`npx playwright test`
- run tests with browser GUI  
`npx playwright test --headed`
- view report  
`npx playwright show-report`

## Playwright Config modifications
- config file `playwright.config.ts`
- disable browsers, i.e. Firefox  
    ```javascript
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    ```

## Screenshots
StarWarsApi site
![Alt text](/screenshots/site.jpg?raw=true "menu")
Some tests results
![Alt text](/screenshots/testsResults.jpg?raw=true "menu")
