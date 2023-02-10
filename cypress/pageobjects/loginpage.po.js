class Loginpage{


    usernameInput(){

        return `//input[@name="username"]`
    }


    passwordInput(){

        return '//input[@name="password"]'
    }

    submitBtn(){

        return '//button[@type="submit"]'
    }

    errorMessage(){

        return "Invalid credentials"
    }

    loginwithcreds(username, Password){

        cy.xpath(this.usernameInput()).type(username)

        cy.xpath(this.passwordInput()).type(Password)
        cy.xpath(this.submitBtn()).click();
    }

}

export default  Loginpage;