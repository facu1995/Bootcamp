// Ejercicio Nº2
// Crear una función que tome como parametro 2 numeros y retorne true si alguno es 100 o si la suma de ambos es 100

const da100=(nro1,nro2) =>(nro1==100||nro2==100||(nro1+nro2)==100);

console.log(da100(50,50));
console.log(da100(5,50));
console.log(da100(100,50));
console.log(da100(40,100));
