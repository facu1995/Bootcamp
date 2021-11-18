const siguiente=document.querySelector(".siguiente");
const atras=document.querySelector(".atras");
const img1=document.querySelector(".img1");
const img2=document.querySelector(".img2");
const img3=document.querySelector(".img3");
const cantImag=3;
let i=0;

siguiente.addEventListener('click',()=>{
    i++;;
    switch(Math.abs(i% cantImag)){
        case 0:
            img1.classList.add("activo");
            img2.classList.remove("activo")
            img3.classList.remove("activo")
            break;
        case 1:
            img1.classList.remove("activo")
            img2.classList.add("activo");
            img3.classList.remove("activo")
            break;
        case 2:
            img1.classList.remove("activo")
            img2.classList.remove("activo")
            img3.classList.add("activo");
            break;
    }
});
atras.addEventListener('click',()=>{
    i--;
    switch(Math.abs(i% cantImag)){
        case 0:
            img1.classList.add("activo");
            img2.classList.remove("activo")
            img3.classList.remove("activo")
            break;
        case 1:
            img1.classList.remove("activo")
            img2.classList.add("activo");
            img3.classList.remove("activo")
            break;
        case 2:
            img1.classList.remove("activo")
            img2.classList.remove("activo")
            img3.classList.add("activo");
            break;
    }
});
