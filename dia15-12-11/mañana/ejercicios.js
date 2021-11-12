/* 1-
 arr = [1,3,4,2,6,7,9,1, 8]
Crear una función que indique el total de elementos impares de un array
 output => 5
 
=========================================================== */
console.log("Ejercicio 1:")
let arr = [1,3,4,2,6,7,9,1, 8];
const eje1= arr=>{
    let cont=0;
    for(let i=0;i<arr.length;i++){
        if (arr[i]%2==1)
            cont++;
    }
    console.log(cont);
};
      
eje1(arr);

console.log("Ejercicio 2:")

/* 2-
  str = "hola mundo desde javascript"
  pasar un string en array, indicar los espacios en blanco por "-"
  output => ["hola", "mundo", "-", "desde", "-", "javascript"]
===============
*/
let str = "hola mundo desde javascript";
const eje2= str=>{
    let strnuevo=str.replace(/\s/g," - ");
    let arrayNuevo=strnuevo.split(" ");
    console.log(arrayNuevo);
}
eje2(str);
console.log("Ejercicio 3:")
/*
3- 
/* Crear una variable que contenga el siguiente array :
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Definir una variable filtered que muestre los valores de los los numeros que son pares utilizando el método .filter() */
let arr3=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter=arr3.filter(x=>x%2==0)
console.log(filter);
/* 

4- Crear una variable que filtre los animales que no sean 'cat' usar filter
const pets = ['cat', 'dog', 'elephant','hawk','snake','cat'] */
console.log("Ejercicio 4:")
const pets = ['cat', 'dog', 'elephant','hawk','snake','cat'];
let petsNuevo=pets.filter(x=>x!="cat");
console.log(petsNuevo)

console.log("Ejercicio 5:")
/* 5- Crear una variable que muestre solo los nombres de los productos del siguiente array
hacerlo con .map
*/
const productos = [
    {id:2, nombre: 'Remera muy fachera', precio:250},
    {id:5, nombre: 'Pantalon muy fachero', precio:400},
    {id:6, nombre: 'Camperon invierno', precio:699},
    {id:34, nombre: 'Guantes negros', precio:199},
];
let eje5=productos.map(x=> x.nombre);
console.log(eje5);

console.log("Ejercicio 6:")
/* 6-  Usando el reduce retornar un solo array. pista: .concat*/
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
let arrUnico=data.reduce((cache,presente)=>{
    return cache.concat(presente);
})
console.log(arrUnico);