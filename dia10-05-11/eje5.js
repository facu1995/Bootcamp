const log=console.log;

function arrayInvertido(array){
    aux=[];
    for(var i=array.length-1; i>=0; i--){
        aux.push(array[i]);
    }
    return aux;
}

let array =[1,2,3,4]
let array2=arrayInvertido(array);
log(array);
log(array2);