let montoPesos= prompt("ingrese el monto en pesos que desea convertir"); 
let impuesPais = (montoPesos * (1.35)) - montoPesos; 


let convers = () =>{
 
    return "el valor de la convertibilidad es" + " " + (montoPesos/310); 

};

 alert(convers()); 
 



 let impuestos =() =>{

    if(montoPesos>2000){

    return "el total de impuesto es de $ "+ impuesPais +"\n" + " es por haber superado los $2000";
        
    
   }else{

    return "Como no superas los $2000, no debes abonar impuestos";
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
    
      function bancossele (financiera){

        return financiera.bancos = "ciudad"
      };

      let financias= entidad.find(bancossele);
      console.log(financias)
      let nuevoimp = 0;
     
      if(financias != "galicia"){ 

        nuevoimp =  (impuesPais / 3)

       alert("Por tener banco ahderidos a AFJP, TU Saldo real de impuesto es " + nuevoimp)

      }else{ 

        alert("tu banco no tiene benefecios")
      };
