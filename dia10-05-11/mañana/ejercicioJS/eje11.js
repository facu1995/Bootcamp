function eje11(nro1,nro2){
    return (Math.abs(100-nro1)<=Math.abs(100-nro2)) ? "numero1 esta mas cerca":"numero2 esta mas cerca";
}

console.log(eje11(5,10));
console.log(eje11(60,10));
console.log(eje11(60,102));