import signupPage from "./Signuppage"

class homePage{
    //elemnts
    get signupbutton(){
       return cy.get('#signin2')
    }
    get signuplabel(){
        return cy.get('#signInModalLabel')
    }

    //method 
    visitwebsite(){
        cy.visit('/')

        return this
    }
    
    clicksignup(){

        this.signupbutton.click().wait(1000)

        return new signupPage
    }

    checksignuplabelinvisible(){
        this.signuplabel.should('not.be.visible')

        return this
    }
}

export default homePage