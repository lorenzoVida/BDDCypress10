class parameterPage{

    lblSearchProducto="input[placeholder^='Buscar productos']";

    enterWebsite(){
        cy.visit('https://simple.ripley.com.pe/')
    }

     /**
     * @param {string} product - name of producto
     */
    searchProduct(product){
        cy.get(this.lblSearchProducto).type(product)
    }



}
module.exports = new parameterPage();