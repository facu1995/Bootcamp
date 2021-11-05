const log=console.log;

function concaternarArray1(array1,array2){
    let aux=[];
    for(i=0;i<array1.length;i++){
        aux.push(array1[i]);
    }
    for(let i=0;i<array2.length;i++){
        aux[i+array1.length]=array2[i];
    }
    return aux;
}
/* OOOOOOOOOOOOO */
function concaternarArray2(array1,array2){
    let aux=[];
    aux=array1.concat(array2);
    return aux;
}

let array1=[1,2,3,4],array2=[5,6,7];

log(concaternarArray2(array1,array2));