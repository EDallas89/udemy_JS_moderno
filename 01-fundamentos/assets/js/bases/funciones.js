
function saludar(nombre){
  //console.log(arguments);
  //console.log('Hola ' + nombre);
  return [1,2];

  console.log('Soy un codigo que está después del return');
}

const saludar2 = function(nombre) {
  console.log('Hola ' + nombre);
}

const saludarFlecha = () =>{
  console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) =>{
  console.log('Hola ' + nombre);
}

const restornoDeSaludar = saludar('Inma', 33, true, 'España');
//console.log(restornoDeSaludar[0], restornoDeSaludar[1]);

//saludar2('Inma');
//saludarFlecha('Inma');
//saludarFlecha2('EDallas');


function sumar(a, b) {
  return 'Hola Mundo';
}

// const sumar2 = (a, b) => {
//   return a +b;
// }

const sumar2 = (a, b) => a + b;

function getAleatorio(){
  return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());