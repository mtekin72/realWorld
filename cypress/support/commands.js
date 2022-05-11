import userInfo from '../support/userInfo.json'
import homePageElements, { h_locators } from "../integration/webelements/homePageElements"
import signinPageElements from '../integration/webelements/signinPageElements'
import dashboardElements from "../integration/webelements/dashboardElements"

Cypress.Commands.add("launch", () => {
    cy.visit(Cypress.env('global').url, { timeout: 128000 }, { force: true },{retryOnNetworkFailure:true})
    
  
  })

Cypress.Commands.add("login", () => {
    cy.get(homePageElements.locators.signinbutton, { timeout: 90000 }, { force: true }).click({ force: true })
    cy.wait(3)
    cy.get(signinPageElements.locators.email, { timeout: 9000 }).clear().type(userInfo.email)
    cy.get(signinPageElements.locators.password, { timeout: 9000 }).clear().type(userInfo.password)
    cy.get(signinPageElements.locators.submitbutton, { timeout: 9000 }).click({ force: true })
  
  })

  Cypress.Commands.add("logOut", () => {
    cy.get(signinPageElements.locators.loggeduser).click({force:true}) // click to logged user button
    cy.get(dashboardElements.locators.editProfileSettings).click({force:true}) // click to Edit Profile Settings button
    cy.get(signinPageElements.locators.logoutUser).click({force:true}) // Logout
  
  })
  Cypress.Commands.add('getText', (element,expectedtext) => {
    cy.get(element,{timeout:9000},{force:true}).then(($el) => {
      const txt = $el.text().replace(/(\r\n|\n|\r)/gm, "")
      const elementtext=txt.replace("                                    ","")
      cy.log(elementtext)
    
      expect(elementtext).to.contain(expectedtext);
           
    })
    })
 