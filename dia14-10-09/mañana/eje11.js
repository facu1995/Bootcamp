/* 1-
 str = "origin"
  cambiar las vocales por el numero 1
  output => 1r1g1n
===========================================================
 */
let str = "origin";
str =str.replace(/[aeiou]/g, "1");
console.log("Ejercicio 1: "+str);

/* 2-
 Crear una función que acepte un parámetro con los valores desde 1 hasta 5
 si valor numérico ingresado es 1 mostrar una lista del 1 al 10, si es 2 mostrar del 2 al 10,
 teniendo en cuenta el limite es 10
  posibles salidas esperadas:
  output => 1...10
  output => 2...10
  output => 3...10
  output => 4...10
  output => 5...10
===========================================================
 */
const eje2= nro=>{
  if(nro>0&&nro<6){
    let i=nro
    for(;i<11;i++){
      console.log(i+"..10");
    }
  }
  else{
    console.log("el valor ingresado no es de 1 a 5");
  }
}
eje2(5);
eje2(7);
eje2(2);
/* 3-
  arr = [10, "20", 30, "40", 50]
  verificar cada elemento sea de  tipo number y sino lo es cambiar su  tipo
  a number
  output => [10, 20, 30, 40, 50]
=========================================================== */
let arr = [10, "20", 30, "40", 50];
array2 =arr.map(x=>Number(x)
)
console.log(array2);


/* 4-
 arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
 eliminar los elementos repetidos, nota: (el segundo elemento repetido)
 output => [2, 4, 7, 1, "foo", "bar", "qux", 3] */

 arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
 const filter = arr => [...new Set(arr)];
 arr=filter(arr)
 console.log(arr);