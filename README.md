# Project Title

This project is for Wrkr Coding Challenge. Its functionality includes:

* A search page to search for repository based on keyword and language

# Live demo

The application has been deployed to [Github page](https://mankinchi.github.io/wrkr-coding-challenge/)

# Main packages used

* **Styling**: TailwindCSS
* **API**: Axios
* **Date handling**: date-fns
* **Icon**: react-feather
* **Coding standard**: Eslint (extends Airbnb) and Prettier

# To run locally

* Clone the application
* Run `npm i`
* Run `npm start`

# Tests

The application includes 2 sets of tests:

* Unit Testing: written with Jest + React Testing Library
* E2E: written with Cypress

Command to run these tests:

* Unit Testing: `npm run test`
* E2E: `npm run e2e`

# CI/CD

This repository is also set up with Github Action in order to automate running tests (both unit testing and e2e). If both of them success, the pipeline will deploy the application to github pages.

## Assumptions

* Github API will only be used partially so no full typing of api is required.
* Don't use provided icon since `react-feather` allows better control of text color out of the box
* UI is a guideline only so I made some changes to make the search page result feel smoother
* App contains 3 pages so no lazy loading required. If needed, `react` provides tools to work with lazy loading.

## Constraints

Due to the platform selected to deploy the app (Github Pages), the initial access must be through https://mankinchi.github.io/wrkr-coding-challenge/ since at this point, the routing belongs to Github.
Hence, this won't allow the showcase of incorrectly handling the random path. You can check the code in [route file](./src/routes.tsx)

## Have to skip due to out of time

* Write unit test for hooks (RTL has renderHook but I have no prior experience)
* No accessiblity is done to saved on time. Would use `react-accessibility` to help with that

## Pages 

* **Home page**: empty, has a message prompting user to use the navigation
* **Search page**: main objective
* **Showcase page**: I played around with the loading behaviour and created something quite cool. I just want to put it in a page just in case the internet is too fast you won't be able to see it
