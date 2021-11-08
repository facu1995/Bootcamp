// Ejercicio Nº4
// Crear dos funciones una que convierta los grados Cº a Fº y viceversa
// ºF = (ºC · 1.8) + 32
// ºC = (ºF -32) / 1.8
//(faren- 32) * 5 / 9;
//* 9 / 5 + 32;

const deGradosaFaren=grados =>(grados* 9 / 5 + 32);
const deFarenaGrados=faren =>((faren- 32) * 5 / 9);

console.log(deGradosaFaren(5));
console.log(deFarenaGrados(41));


