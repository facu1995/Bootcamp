const log=console.log;

function concaternarArray1(array1,array2){
    for(let i in  array2)
        array1.push(array2[i]);
    return array1;
}
/* OOOOOOOOOOOOO */
const concaternarArray2=(array1,array2)=>array1.concat(array2);

let array1=[1,2,3,4],array2=[5,6,7];
console.log(concaternarArray2(array1,array2));