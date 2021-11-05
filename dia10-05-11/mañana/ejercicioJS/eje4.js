const log=console.log;

function arrayInvertido(array){
    aux=[];
    for(var i=array.length-1; i>=0; i--){
        aux.push(array[i]);
    }
    array=aux;
    return array;
}

let array =[1,2,3,4];
array=arrayInvertido(array);
log(array);
