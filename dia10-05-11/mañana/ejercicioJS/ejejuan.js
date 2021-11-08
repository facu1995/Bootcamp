const log=console.log;

var arr = [10 , 20 , 30 , 40 , 50, 60, 70, 80, 90, 100];
for(let i=0,len=arr.legth;i<arr.length;i++){
    log(i,arr[i]);
}
log("*****************");
for(let i in arr){
    log(i,arr[i]);
}