
import homePage from "../Pages/homePage"


it('Should signup successfully using valid credentials ', ()=>{
 
    const homepageobject =new homePage

    homepageobject
    .visitwebsite()
    .clicksignup()
    .signup(Cypress.env('user'),Cypress.env('Pass'))
    .checksignuplabelinvisible()

    
})