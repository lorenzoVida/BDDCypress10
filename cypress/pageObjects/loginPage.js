class loginPage{

    txtUser="input[placeholder='Username']";
    txtPass="input[placeholder='Password']";
    btnIngresar="button[type='submit']";

    ingresarUrl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    ingresarUsuario(){
        cy.get(this.txtUser).type('Admin');
    }


    ingresarClave(){
        cy.get(this.txtPass).type('admin123');
        cy.get(this.btnIngresar).click()
        cy.wait(9000)
    }



}
module.exports = new loginPage();