import homePage from "./homePage"

class signupPage{
    get userfield(){
        return cy.get('#sign-username')
    }

    get passwordfield(){
        return  cy.get('#sign-password')
    }

    get submitButton(){
        return cy.get('[onclick="register()"]')
    }

    

    

  
    signup(user,password){
        this.userfield.type(user)
        this.passwordfield.type(password)
        this.submitButton.click()

        return new homePage
    }

    

    filluserfield(user){
        this.userfield.type(user)
    }


    
}
export default signupPage