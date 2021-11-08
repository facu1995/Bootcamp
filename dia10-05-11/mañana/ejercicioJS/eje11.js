const masCercaDe100=(nro1,nro2)=> (Math.abs(100-nro1)<=Math.abs(100-nro2)) ? "numero1 esta mas cerca":"numero2 esta mas cerca";

console.log(masCercaDe100(5,10));
console.log(masCercaDe100(60,10));
console.log(masCercaDe100(60,102));