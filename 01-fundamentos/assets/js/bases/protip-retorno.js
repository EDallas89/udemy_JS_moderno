
//function crearPersona( nombre, apellido) {
//  return { nombre,apellido}
//}

const crearPersona =( nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Inma', 'Sánchez');
console.log(persona);

function imprimeArgumentos(){
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => { // ... es el parámetro rest, no puede ir ningún otro argumento
  //console.log({edad, args});
  return args;
}

const[casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Inma', 'Hola');
console.log({casado, vivo, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Inma', 'Sánchez');
console.log({nuevoApellido});

const tony = {
  nombre: 'Tony Stark',
  codeName: 'IronMan',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

//const imprimePropiedades = (personaje) => {
//  console.log(personaje.nombre);
//  console.log(personaje.codeName);
//  console.log(personaje.vivo);
//  console.log(personaje.edad);
//  console.log(personaje.trajes);
//}


const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
  console.log({nombre});
  console.log({codeName});
  console.log({vivo});
  console.log({edad});
  console.log({trajes});
}
imprimePropiedades(tony);