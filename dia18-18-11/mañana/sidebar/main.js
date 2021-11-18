/* DOM */
const siguiente = document.querySelector(".siguiente");
const atras = document.querySelector(".atras");
const arrImg = document.querySelectorAll(".img");

/* variables */
const cantImag = 3;
let i = 0;

function actualizarFoto(){
    let resto = Math.abs(i % 3);
    arrImg.forEach((el, i) => {
        if (i == resto) {
            el.classList.add("activo");
        }
        else {
            el.classList.remove("activo")
        }
    })
}

siguiente.addEventListener('click', () => {
    i++;
    actualizarFoto();
}); 

atras.addEventListener('click', () => {
    i--;
    actualizarFoto();
}); 
