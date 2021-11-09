/* Ejercicio Nº1
Escribe una función que sume que calcule la suma de dígitos de un número entero es decir la suma de todos sus dígitos.
Ejemplo: suma de dígitos (192) debería devolver 12 (1+9+2)
*/

const eje1= nro=>{
    let msj=nro.toString();
    let acu=0;
    for(let i of msj)
        acu+=parseInt(i);
   return acu;
}
/* console.log(eje1(192)); */

/* Ejercicio Nº2
Escriba una función que tome un string con una suma y devuelva su resultado como un número.
Deben sumarse dos números naturales(numeros enteros). La tarea de suma es una cadena de la forma '102 + 17'.
*/
const eje2 =cadena=>{

    let array=cadena.split("+");
    return parseInt(array[0])+parseInt(array[1]);
}
console.log(eje2('102 + 17'));

/* Ejercicio Nº3
Escribir una función que genere un numero random y pregunte por prompt "Adivina un numero del 1 al 10"
hasta que acierte y muestre "Adivinaste el numero"*/
const eje3= ()=>{

    let nro1= Math.round(Math.random()*(10-1)+1);
    let nro2 = prompt("Ingrese un numero");
    console.log((nro1==nro2)? "adivinaste":"le erraste era "+nro1);
}

