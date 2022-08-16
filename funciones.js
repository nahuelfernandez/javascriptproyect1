let montoPesos= prompt("ingrese el monto en pesos que desea convertir"); 
let impuesPais = (montoPesos * (1.35)) - montoPesos; 


let convers = () =>{
 
    return "el valor de la convertibilidad es" + " " + (montoPesos/310); 

} 

 alert(convers()); 
 



 let impuestos =() =>{

    if(montoPesos>2000){

    return "el total de impuesto es de $ "+ impuesPais +"\n" + " es por haber superado los $2000";
        
    
   }else{

    return "Como no superas los $2000, no debes abonar impuestos";
   }

    
 };

    alert(impuestos()); 