// Ejercicio Nº2
// Crear una función que tome como parametro 2 numeros y retorne true si alguno es 100 o si la suma de ambos es 100

const eje2=(nro1,nro2) =>(nro1==100||nro2==100||(nro1+nro2)==100);

console.log(eje2(50,50));
console.log(eje2(5,50));
console.log(eje2(100,50));
console.log(eje2(40,100));
