const nav=document.querySelector(".nav");
const section=document.querySelector(".section");
const footer=document.querySelector(".footer");
const checkbox=document.querySelector(".checkbox");
const body=document.querySelector("body");
const azulOscuro="#1c2dfa";
const violetaOscuro="#5311e0";
const violetaClaro="#af6cf8" 
const celesteClaro="#9bf5f5";
const blanco="#fff";
const black="#000000";
nav.style.backgroundColor=violetaOscuro;
        section.style.backgroundColor=azulOscuro;
        footer.style.backgroundColor=black;
        body.style.color=blanco;


checkbox.addEventListener("click",()=>{
    if (checkbox.checked != true){
        nav.style.backgroundColor=violetaOscuro;
        section.style.backgroundColor=azulOscuro;
        footer.style.backgroundColor=black;
        body.style.color=blanco;
        console.log(checkbox.checked != true)
    }
    else{
        nav.style.backgroundColor=violetaClaro;
        section.style.backgroundColor=celesteClaro;
        footer.style.backgroundColor=blanco;
        body.style.color=black;
    }
})



let shows = document.querySelectorAll('.show');
let contents = document.querySelectorAll('.questions-content');



