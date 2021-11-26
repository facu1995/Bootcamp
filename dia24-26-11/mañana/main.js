const btn= document.querySelector(".mono");
const img1= document.querySelector(".mono-1");
const img2= document.querySelector(".mono-2");

let activo=0;
btn.addEventListener('click', ()=>{
    if(activo===0){
        activo=1;
        img1.classList.remove('active');
        img2.classList.add('active');
    }
    else{
        activo=0;
        img1.classList.add('active');
        img2.classList.remove('active');
    }
})