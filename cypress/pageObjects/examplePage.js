class examplePage{

    lblSearchProducto="input[placeholder^='Buscar en exito.com']";

    enterWebsite(){
        cy.visit('https://www.exito.com/')
    }

    searchProduct(nameProduct){
        cy.get(this.lblSearchProducto).type(nameProduct)
    }



}
module.exports = new examplePage();