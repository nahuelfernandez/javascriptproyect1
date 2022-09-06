/*
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

        alert("tu banco no tiene beneficios");
      };
    
 
       let prestamos = prompt("Desea adquirir un prestamo personal");
       let nombre_prestamo = prompt("ingrese su nombre");
       let apellido_prestamo = prompt("ingrese su apellido");
       let dni_prestamo = prompt("ingrese su dni");
       let mail_prestamo = prompt("ingrese su correo");
        

       class Nuevo_prestamo { 
            constructor (nombre,apellido,dni,email){

                this.nombre=nombre;
                this.apellido=apellido;
                this.dni=dni;
                this.email=email;


            };
              saludar (){
                      
                   console.log("hola estimado",this.nombre);
            };
               

             }; 
            
            
     let nuevousuario_prestamo = new Nuevo_prestamo (nombre_prestamo,apellido_prestamo,dni_prestamo,mail_prestamo);
      
       console.log(nuevousuario_prestamo);
        nuevousuario_prestamo.saludar(); 
             */

       let  btn_encuenta = document.getElementById("btn_encuenta");

       btn_encuenta.addEventListener("click",function(){

                   console.log("ya estas participando");
                  
       }); 


       let inputnombre=document.getElementById("nombre"); 
       let inputcontacto=document.getElementById("contacto"); 
       
       let bottonenviar= document.getElementById("enviar");

       bottonenviar.addEventListener("click",function() {

                 alert ("Gracias" + inputnombre.value+ " nos comunicaremos al numero  "+ "" + inputcontacto.value );
                
       });


        

            
        
          
      



      
       