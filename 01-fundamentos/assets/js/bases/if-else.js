
let a = 5;

if (a >= 10){
  console.log('A es mayor o igual a 10');
} else {
  console.log('A es menor a 10');
}

//console.log('Fin de programa');

const hoy = new Date();

let dia = hoy.getDay();
console.log(dia);

if (dia === 0){
  console.log('Domingo');
} else if(dia === 1) {
  console.log('Lunes');
  //if (dia ===1){
  //  console.log('Lunes');
  //} else {
  //  console.log('No es lunes ni domingo');
  //}
} else if(dia === 2) {
  console.log('Martes');
} else {
  console.log('No es domingo, ni lunes ni martes.');
}

dia = 3;
// opción 1
const diasLetras = {
  0: 'domingo - 0',
  1: 'lunes -1',
  2: 'martes - 2', 
  3: 'miércoles - 3',
  4: 'jueves - 4',
  5: 'viernes -5',
  6: 'sábado - 6'
}
console.log(diasLetras[dia] || 'Día no definido');

// opción 2
let semana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
console.log(semana[dia]);