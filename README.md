<H1>How to run automated tests to Smart Reporting Challenge</h1>

<h3>Requirements</h3>

- Node installed in the machine

<h3>Steps to execute</h3>

- Clone this repository to your local computer
- Run the following comands:

```sh
npm install #to install dependencies
npm run cypress:open #to execute the tests
```

<h3>About the project</h3>

In this project was used Cypress with Cucumber using Gherkin syntax, each feature has it own file located in `cypress/integration`.

Was created 4 scenarios to Add, Edit, Delete and Filter a computer.
