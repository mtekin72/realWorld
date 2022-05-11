
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import  homePageElements  from "../../webelements/homePageElements"
import signinPageElements from "../../webelements/signinPageElements"
import dashboardElements from "../../webelements/dashboardElements"
before(() => {

    cy.launch()
    cy.login()
  
  })
Given('user clicks to New Post button', () => {
    
    cy.get(homePageElements.locators.newPostButton).click()
   // cy.url().should('include', 'article')
})
When('user types {string}  what is this article {string}   and enters {string} {string}', (articletitle,about,write,tag ) => {

    cy.get(dashboardElements.locators.articleTitle).clear().type(articletitle)
    cy.get(dashboardElements.locators.articleAbout).clear().type(about)
    cy.get(dashboardElements.locators.writeArticle).clear().type(write)
    cy.get(dashboardElements.locators.enterTag).clear().type(tag)

})
And('user clicks publish article button',() => {
    cy.get('.btn').click({force:true})
})

Then('user should be able to successfuly create a New Article and Publish {string}', (articletitle ) => {
   
    cy.getText(signinPageElements.locators.loggeduser, 'testuser@iptiq.com')
    cy.wait(3000)
    cy.title().should('eq', 'Conduit')
    cy.location('protocol').should('eq', 'https:')
    cy.contains(articletitle)
    cy.getText('h1',articletitle)

})

afterEach(() => {
    cy.get(dashboardElements.locators.deleteArticle,{timeout:5000}).click({force:true}) // Delete article
    cy.wait(3000)
  })
  after(() => {
    cy.logOut()
    cy.getText(homePageElements.locators.containerText,'A place to share your knowledge.') // HomePage Container Text Confirmation
  })

