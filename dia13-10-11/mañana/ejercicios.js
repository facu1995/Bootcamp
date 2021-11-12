/* Ej-1  cadena = "javascript"; dada la anterior cadena colocar la primera letra en mayúscula
      output => Javascript
 */
let cadena = "javascript";
let arrayCadena=cadena.split("");
arrayCadena[0] = arrayCadena[0].toUpperCase();
cadena=arrayCadena.join("");
console.log("Ejercicio 1: "+cadena);


/* Ej-2 cadena = "javascript";  dada la anterior cadena colocar la ultima letra en mayúscula
    output => javascripT
 */
cadena = "javascript";
arrayCadena=cadena.split("");
arrayCadena[arrayCadena.length-1] = arrayCadena[arrayCadena.length-1].toUpperCase();
cadena=arrayCadena.join("");
console.log("Ejercicio 2: "+cadena);


/* Ej-3 arr = ["foo", "bar", "baz", "qux", "origin"]
     buscar en ele array el elemento baz y mostrarlo console
     output =>  baz
 */

let arr = ["foo", "bar", "baz", "qux", "origin"]
let buscado=arr.find(element => element=="baz");
console.log("Ejercicio 3: "+buscado);

/* Ej-4 arr = ["foo", "bar", "baz", "qux", "origin"]
     vaciar el arr
     output => [ ] */
arr = ["foo", "bar", "baz", "qux", "origin"];
arr.length=0;
console.log("Ejercicio 4: "+arr);

/* Ej-5  1 str = "origin"
  eliminar las vocales del string
  output => rgn */
let str = "origin";
str =str.replace(/[aeiou]/g, "");
console.log("Ejercicio 5: "+str);