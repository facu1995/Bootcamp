/* let arr = [1,"2",3,45,"78",3,"57", 100, 120]; */
/*en que posicion tengo los tipo string
 */

/* let i=0;
let len=arr.length;
console.log("Version for");
for(;i<len;i++){
    if(typeof arr[i]=="string"){
        console.log(i);
    }
}

console.log("Version while");
i=0;
    while(i<len){
        if(typeof arr[i]=="string"){
            console.log(i);
        }
        i++;
    }


    console.log("Version map");
arr.map((x,i) =>{
        if((typeof x)=="string"){
            console.log(i);
        }
    }) */

/* let len=arr.length;
let cont=0;
console.log("Version for");
for(;;){
    if(typeof arr[cont]=="string"){
        console.log(cont);
    }
    cont++;
    if(cont==len){
        break;
    }
}

console.log("Version while");
cont=0;
while(true){
    if(typeof arr[cont]=="string"){
        console.log(cont);
    }
    cont++;
    if(cont==len){
        break;
    }
}
 */

/* let arr = ["1","2",3,45,"78",3,"57", 100, 120];
resp= arr.reduce((pasado,presente)=>{
        if (typeof pasado=="string"&&typeof presente=="string")
            return  0;
        else{
            if(typeof pasado=="string")
                return presente;
            else{
                if(typeof presente=="string")
                    return pasado;
                else{
                    return pasado+presente;
                }
            }
        }
})
console.log(resp); */

let arr4=[1,2,3,4,5]
let nuevo=arr4.reduce((pasado,presente)=>{
    console.log(pasado,presente);
    return presente+pasado;
});





