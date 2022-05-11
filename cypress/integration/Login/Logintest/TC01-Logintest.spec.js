import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import  homePageElements  from "../../webelements/homePageElements"
import signinPageElements from '../../webelements/signinPageElements'
import userInfo from '../../../support/userInfo.json'

Given('user navigates to homepage', () => {
    cy.launch()
})
When('user enters valid {string} and {string}', (email,password) => {
    cy.get(homePageElements.h_locators.signinbutton, { timeout: 90000 }, { force: true }).click({ force: true })
    cy.wait(3)
    cy.get(signinPageElements.h_locators.email, { timeout: 9000 }).clear().type(email)
    cy.get(signinPageElements.h_locators.password, { timeout: 9000 }).clear().type(password,{log:false})
    expect(email,"username set",{ timeout: 13000 }).to.be.a("string").and.not.be.empty;
    expect(password,"password set",{ timeout: 13000 }).not.be.empty;
    cy.get(signinPageElements.h_locators.submitbutton, { timeout: 9000 }).click({ force: true })
   
})
Then('user should be able to successfuly login', () => {
   
    cy.getText(signinPageElements.h_locators.loggeduser, 'testuser@iptiq.com')
    cy.title().should('eq', 'Conduit')
    cy.location('protocol').should('eq', 'https:')

})


When('user enters invalid {string}', (email) => {
    cy.get(homePageElements.h_locators.signinbutton, { timeout: 90000 }, { force: true }).click({ force: true })
    cy.wait(3)
    cy.get(signinPageElements.h_locators.email, { timeout: 9000 }).clear().type(email)
    expect(email,"username set",{ timeout: 13000 }).to.be.a("string").and.not.be.empty;
    cy.get(signinPageElements.h_locators.submitbutton, { timeout: 9000 }).click({ force: true })

})
Then('user should not be able to successfuly login', () => {
   
    cy.contains("password can't be blank")

})


When('user enters invalid {string} and {string}', (email,password) => {
    cy.get(homePageElements.h_locators.signinbutton, { timeout: 90000 }, { force: true }).click({ force: true })
    cy.wait(3)
    cy.get(signinPageElements.h_locators.email, { timeout: 9000 }).clear().type(userInfo.invalidemail)
    cy.get(signinPageElements.h_locators.password, { timeout: 9000 }).clear().type(userInfo.invalidpassword,{log:false})
/*     expect(email,"username set",{ timeout: 13000 }).to.be.a("string").and.not.be.empty;
    expect(password,"password set",{ timeout: 13000 }).not.be.empty; */
    cy.get(signinPageElements.h_locators.submitbutton, { timeout: 9000 }).click({ force: true })
   
})

Then('user should see an error message', () => {
   
    cy.contains("email or password is invalid")

})

      