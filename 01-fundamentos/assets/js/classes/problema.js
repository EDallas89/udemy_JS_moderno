
const fer = {
  nombre: 'Fernando',
  edad: 30,
  imprimir(){
    console.log(`Nombre: ${ this.nombre }`)
  }
}

const pedro = {
  nombre: 'Pedro',
  edad: 15
}

// fer.imprimir()

function Persona (nombre, edad){
  console.log('Se ejecutó esta línea');

  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function() {
      console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`)
  }
}

const maria = new Persona('Maria', 18)
const Melissa = new Persona('Melissa', 35)

console.log(maria);

maria.imprimir()