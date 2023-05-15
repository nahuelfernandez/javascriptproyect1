 
 
 //clase
 class Auto{
    constructor(velocidad,semaforo,contador){
    this.velocidad = velocidad;
    this.semaforo = semaforo;
    this.contador= contador;
    
    }
    
 //metodos
    acelerar(){ 
    
   if(this.velocidad > 60){
     return true;
    }else{
        return false;
    };

} ;
    frenar(){
    if(this.semaforo == "rojo"){
    return true;
    }else{

        return false;
    };
    };


   } ;


const auto1 = new Auto(30,"rojo");
const auto2 = new Auto(30,"verde");

console.log(auto1.acelerar());
console.log(auto2.acelerar());
//si  involucras variable del objeto ingresar esas comillas
console.log(`La multa se ha realizado del auto 1-no freno ${auto1.frenar()}`);
console.log(`La multa se ha realizado del auto 2-no freno ${auto2.frenar()}`);

let contador = 0;

if(auto1.acelerar()|| auto1.frenar()){
    contador++;
    
    }; 

    if(auto2.acelerar()|| auto2.frenar()){
        contador++;
        
        }; 

    console.log(contador);

    
    let nuevoarray =[5,25,35,55] 
        //eleva el valor baase por su indice en el array 
    let modificacionarray = nuevoarray.map((numero,indice)=>numero **indice); 
    console.log(modificacionarray); 


    let productos= [
      "computadora",
      "puerta",
       "mesa" 
    ]
     //muestra los id y si quisieramoque muestre cel, comp, se hace con objets.values
    let simpleproductos = Object.keys(productos); 

    console.log(simpleproductos);

    let incluimos = productos.includes("computadora");
    console.log(incluimos);


    let totalproductos= Object.values(productos);
    console.log(totalproductos); 

    const arrayDeStrings = ["2", "3", "5.5", "7", "8.5"];
let suma = 0;

for (let i = 0; i < arrayDeStrings.length; i++) {
  suma += parseFloat(arrayDeStrings[i]);
}

console.log(suma)