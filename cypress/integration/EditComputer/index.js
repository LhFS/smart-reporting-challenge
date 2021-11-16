import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CONSTANTS from '../../support/constants'
const computerName = 'ARRA-CHANGED'

Given('that I access the application', () => {
  cy.visit(CONSTANTS.URL)
})

When('I filter and access one computer', () => {
  cy.get('input#searchbox').type('ARRA')
  cy.get('input#searchsubmit').click()
  cy.get('td a').contains('ARRA').click()
})

And('edit the computer', () => {
  const randomSelect = (Math.floor(Math.random() * (42 - 1 + 1)) + 1).toString()

  cy.get('input#name').clear()
  cy.get('input#name').type('ARRA-CHANGED')
  cy.get('input#introduced').type('2021-03-03')
  cy.get('input#discontinued').type('2021-04-04')
  cy.get('select#company').select(randomSelect)
  cy.get('input[type="submit"]').contains('Save this computer').click()
})

Then('the system have to show a message of success', () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq('/computers')
  })
  cy.get('div.alert-message')
    .invoke('text')
    .then((text) => {
      expect(text).to.eq(`Done !  Computer ${computerName} has been updated`)
    })
})
