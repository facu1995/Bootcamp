const nav=document.querySelector(".nav");
const section=document.querySelector(".section");
const footer=document.querySelector(".footer");
const checkbox=document.querySelector(".checkbox");
const body=document.querySelector("body");
const azulOscuro=rgb(14, 29, 238);
const violetaOscuro="#5311e0";
const violetaClaro=rgb(121, 128, 230);
const celesteClaro="#9bf5f5";
const blanco="#fff";
const black=rgb(0, 0, 0);

if (checkbox.checked != true){
    nav.style.backgroundColor=violetaOscuro;
    section.style.backgroundColor=azulOscuro;
    footer.style.backgroundColor=black;
    body.style.color=blanco;
}
else{
    nav.style.backgroundColor=violetaClaro;
    section.style.backgroundColor=celesteClaro;
    footer.style.backgroundColor=blanco;
    body.style.color=black;
}


