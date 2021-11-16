import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CONSTANTS from '../../support/constants'
const computerName = 'ASCI Blue Mountain'

Given('that I access the application', () => {
  cy.visit(CONSTANTS.URL)
})

When('I filter by name and access one computer', () => {
  cy.get('input#searchbox').type('ASCI Blue Mountain')
  cy.get('input#searchsubmit').click()
  cy.get('td a').contains('ASCI Blue Mountain').click()
})

And('click on Delete this computer', () => {
  cy.get('input[type="submit"]')
    .contains('Delete this computer')
    .click({ force: true })
})

Then('the system have to show a message of delete success', () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq('/computers')
  })
  cy.get('div.alert-message')
    .invoke('text')
    .then((text) => {
      expect(text).to.eq(`Done !  Computer ${computerName} has been deleted`)
    })
})
