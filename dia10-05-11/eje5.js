const log=console.log;

function arrayInvertido(array){
    aux=[];
    for(var i=array.length-1; i>=0; i--){
        aux.push(array[i]);
    }
    return aux;
}

log([1,2,3,4]);
log(arrayInvertido([1,2,3,4]));