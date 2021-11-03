let array = ["lorem", "ipsum", "lorem", "scammer", "simply", "laboris", "sit", "amet", "laboris"];
array = array.filter((item,index)=>{
    return array.indexOf(item) === index;
    })
console.log(array); //[1,2,6,5,9,'33']