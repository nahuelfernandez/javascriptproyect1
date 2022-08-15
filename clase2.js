let ingreseNumero = "";
for(let i=0;i<3;i++){

 ingreseNumero = prompt("ingrese un nueve numeros entero"); 

 if(ingreseNumero == 10){ 

    alert("su numero es 10, es el ganador ")
 }

 console.log(ingreseNumero);
  
 }; 


 let mes = (prompt("ingrese su mes de nacimiento, recuerde ingresarlo en minuscula")) ;
 
 let resenia  = "";

  while(mes != ""){ 

    switch(mes){

        case "enero": 
        alert( resenia + " primer mes del anio");
        mes = "";
        break;


        case "febrero":

        alert( resenia + " segundo mes del anio");
        mes = "";
        break;

        case "marzo":
        alert( resenia + " tercer mes de anio ");
        mes = "";
        break;

        case "abril":
        alert( resenia + " cuarto mes del anio");
        mes = "";
        break; 

        case "mayo":
        alert( resenia + " quinto mes del anio");
        mes = "";
        break;

        case "junio":
        alert( resenia + " sexto mes del anio");
        mes = "";
        break;  

      
        default: 
        alert("si elegis un mes despues de Junio estas al horno jaja");
        mes = "";
        break;
    } 
    mes = (prompt("ingrese su mes de nacimiento, recuerde ingresarlo en minuscula "));

  }


 




