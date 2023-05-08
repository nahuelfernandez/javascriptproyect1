 
 
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

    console.log(contador)