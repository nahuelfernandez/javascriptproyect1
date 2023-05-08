class Ejemplo {
    constructor(numero) {
      this.numero = numero;
    }
    
    esPositivo() {
      if (this.numero > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  const miEjemplo = new Ejemplo(5);
  console.log(miEjemplo.esPositivo());