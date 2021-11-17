const heart=document.querySelector(".fa-heart");
const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");

heart.addEventListener('click', ()=>{
    if(heart.style.color == 'red'){
        heart.style.color= "#acb8d0";
    }
    else{
        heart.style.color = 'red';
    }
})

btn1.addEventListener('click', ()=>{
    btn1.style.display = 'none';
    btn2.style.display = 'block';
})
btn2.addEventListener('click', ()=>{
    btn2.style.display = 'none';
    btn1.style.display = 'block';
})
