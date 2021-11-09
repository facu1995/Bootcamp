// Ejercicio Nº3
// Pasado un string "index.html", "script.js" debe devolver la extension del archivo ej: ".js"
const formato= cadena=>{
    let msj=".";
    let arrayCadena =cadena.split(".");
    if (arrayCadena.length==2)
        msj+=arrayCadena[1];
    else
        msj="No es una cadena valida";
    return msj;
}

console.log(formato("script.js"));
console.log(formato("index.html"));
console.log(formato("index"));