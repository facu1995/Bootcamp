const arrayInvertido=array=>{
    aux=[];
    let i=array.length-1
    for(; i>=0; i--)
        aux.push(array[i]);
    return aux;
}

let array =[1,2,3,4]
let array2=arrayInvertido(array);
log(array);
log(array2);