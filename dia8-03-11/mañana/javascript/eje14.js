let array= ["lorem", "ipsum", "scammer", "simply", "sit", "amet", "laboris", "nisi"];
for (i=0;i<array.length;i++){
    if(array[i]=="laboris"){
        array[i]=array[i].toUpperCase();
    }
}
console.log(array);