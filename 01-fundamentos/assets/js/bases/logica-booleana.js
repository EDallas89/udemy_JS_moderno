
const regresaTrue = () => {
  console.log('Regresa true');
  return true;
}

const regresaFalse = () => {
  console.log('Regresa false');
  return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);

console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && !false);

console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

regresaTrue() && regresaFalse()
console.log('4 condiciones', true && true && true && false);

console.warn('OR');
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());

console.log('4 condiciones', true || true || true || false);

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy false de nuevo' || true;
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy false de nuevo' || true;


console.log({a1, a2, a3, a4, a5});

if (true || true || true || false){
  console.log('Hacer algo');
} else {
  console.log('Hacer otra cosa');
}