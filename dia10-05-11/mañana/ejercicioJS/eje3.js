const log=console.log;

function arrayString(array){
    msj="";
    for(i=0;i<array.length;i++){
        msj+=array[i]+" ";
    }
    return msj;
}

log(arrayString(["hola","pepe",4]));