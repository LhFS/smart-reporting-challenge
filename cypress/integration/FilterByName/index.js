import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CONSTANTS from '../../support/constants'

Given('that I access the application', () => {
  cy.visit(CONSTANTS.URL)
})

When('I type the name of one computer already registered', () => {
  cy.get('input#searchbox').type('ASCI Red')
})

And('press the Filter by name button', () => {
  cy.get('input#searchsubmit').click()
})

Then('the system have to show the computer filtered', () => {
  cy.get('table.computers').contains('td', 'ASCI Red').should('exist')
})
