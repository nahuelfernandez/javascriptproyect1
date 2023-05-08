// class Persona{
//     constructor(nombre) {
//         this.nombre = nombre
//     }
//     static especie = "humano"
//     saludar = () => {
//         console.log(`Hola soy ${this.nombre}`)
//     }
//     getEspecie = () => {
//         console.log(`Aunque no lo creas soy ${Persona.especie}`)
//     }
// }

// const persona1 = new Persona("Juan")
// const persona2 = new Persona("Valen")

// persona1.saludar()
// persona2.saludar()
// persona1.getEspecie()
// persona2.getEspecie()

class Contador{
    constructor(nombre, contador) {
        this.nombre = nombre
        this.contador = contador
    }
    static contadorG = 0

    getResp(){
        console.log(`El resposable es ${this.nombre}`)
    }
    contar(){
        ++this.contador
        ++Contador.contadorG
    }
    getCtd(){
        console.log(`el contador individual es: ${this.contador}`)
    }
    getCtdG(){
        console.log(`el contador global es: ${Contador.contadorG}`)
    }
}

const contador1 = new Contador("Juan", 1)
const contador2 = new Contador("Valen", 2)

contador1.contar()
contador2.contar()
contador1.getCtd()
contador2.getCtd()
contador1.getCtdG()
contador2.getCtdG()