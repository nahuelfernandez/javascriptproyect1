let montoPesos= prompt("ingrese el monto en pesos que desea convertir"); 
let impuesPais = (montoPesos * (1.35)) - montoPesos; 


let convers = () =>{
 
    return "el valor de la convertibilidad es"  + " " + (montoPesos/496) + "USD"; 

};

 alert(convers()); 
 



 let impuestos =() =>{

    if(montoPesos>5000){

    return "el total de impuesto es de $ "+ impuesPais +"\n" + " es por haber superado los $5000";
        
    
   }else{

    return "Como no superas los $5000, no debes abonar impuestos";
   }

   
 };

    alert(impuestos());  

    
  let entidad = [ {bancos:"galicia"},
                    {bancos:"Frances"},
                    {bancos:"Patagonia"},
                    {bancos:"HSBC"},
                    {bancos:"ciudad"},
                    {bancos:"Nuevo Banco"},
                  ]; 
    
      function bancossele (entidad){

        return entidad.bancos = prompt("ingrese su banco")
      };
    
      let finanzas= entidad.find(bancossele);
      console.log(finanzas)
      let nuevoimp = 0;
     
      if(finanzas == "galicia" || "Frances"){ 

        nuevoimp =  (impuesPais / 3);

       alert("Por tener banco ahderidos a AFJP, TU Saldo real de impuesto es " + nuevoimp)

      }else{ 

        alert("tu banco no tiene benefecios")
      };

      
      