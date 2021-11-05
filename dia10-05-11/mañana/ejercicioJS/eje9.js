function eje9(cadena){
    resp="";
    if (cadena.length>=6){
        resp+=cadena[0];
        resp+=cadena[1];
        resp+=cadena[2];
        resp+=cadena[cadena.length-3];
        resp+=cadena[cadena.length-2];
        resp+=cadena[cadena.length-1];
        
    }
    else
        resp="Es menor a 6";
    return resp;
}


console.log(eje9("abcderfg"));