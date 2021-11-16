import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CONSTANTS from '../../support/constants'
const computerName = 'Computer One'

Given('that I access the application', () => {
  cy.visit(CONSTANTS.URL)
})

When('I press the Add a new computer button', () => {
  cy.get('a#add').click()
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq('/computers/new')
  })
})

And('fill all information needed', () => {
  const randomSelect = (Math.floor(Math.random() * (42 - 1 + 1)) + 1).toString()

  cy.get('input#name').type(computerName)
  cy.get('input#introduced').type('2021-01-01')
  cy.get('input#discontinued').type('2021-02-02')
  cy.get('select#company').select(randomSelect)
  cy.get('input[type="submit"]').click()
})

Then('the computer has to be created and a success message must show', () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq('/computers')
  })
  cy.get('div.alert-message')
    .invoke('text')
    .then((text) => {
      expect(text).to.eq(`Done !  Computer ${computerName} has been created`)
    })
})
