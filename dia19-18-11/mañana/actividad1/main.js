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


let shows = document.querySelectorAll('.show');
let contents = document.querySelectorAll('.questions-content');

console.log(object)


for(i in shows){

    shows[i].addEventListener('click', () => {
        if (contents[i].style.display === "none"){
            contents[i].style.display = "block";
        } else {
            contents[i].style.display = "none";
        }
    })
    
}

