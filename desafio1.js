//
class Compra {

    #nuevosproductos;
    
    constructor(){
        this.#nuevosproductos =[];
    
         };

    addProduct(nombre,dni,ciudad){
     const Uno = {

        id:this.#nuevosproductos.length+1, 
        nombre:nombre,
        dni:dni,
        ciudad:ciudad,
     };

    this.#nuevosproductos.push(Uno);
    
    };

    getProduct(){
        console.log(this.#nuevosproductos)
    };

    getProductById(){

        
          
   };
};

 let nuevo = new Compra(); 

nuevo.addProduct("Nahuel",3485858,"rosario");
nuevo.addProduct("Matias",3452343,"rosario");
nuevo.addProduct("Pedro",31414513,"rosario");


nuevo.getProduct();


nuevo.getProductById();