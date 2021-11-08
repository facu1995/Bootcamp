// Ejercicio Nº 1
// Matias olvidó el nombre de sus conocidos y otras cosas.
// Dando un string determinado tiene que devolver la relación que tiene
// Ricardo = "Ricardo es tu tio", Roberto = "Roberto es tu hermano", Argentina = "El país al que perteneces"
// Dinamita = "Es tu gato"
/* const eje1= relacion =>{
    const map=new Map();
    map.set("Ricardo","Ricardo es tu tio");
    map.set("Roberto","Roberto es tu hermano");
    map.set("Argentina","El país al que perteneces");
    return map.get(relacion);
}
/*  */
const eje1= relacion =>{
    resp="";
    switch (relacion) {
        case "Roberto":resp="Roberto es tu hermano";
            break;
        case "Dinamita":resp="Es tu gato";
            break;
        case "Ricardo":resp= "Ricardo es tu tio";
            break;
        case "Argentina" :resp= "El país al que perteneces";
    }
    return resp;
}

console.log(eje1("Roberto"));
console.log(eje1("Ricardo"));
