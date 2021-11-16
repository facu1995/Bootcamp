/* Ejercicio Nº1:
Tomar TODOS los elementos <p> de la página y cambiar el color de fondo
(crear varios elementos)
Ejercicio Nº2:
Contar la cantidad de palabras dentro de los elementos <p> e insertar al principio de la página la cantidad
Ejercicio Nº3:
Crear un anchor que el link sea https://www.google.com.ar/
al clickearlo no permitir que salga de la página en la que estas y muestre la dirección en un elemento del html
Ejercicio Nº4:
Crear un elemento <img> que contenga una imagen a elección */
/* 
const elem = document.getElementsByClassName('nombreClase');
 */
//const elem = document.getElementsByClassName('parrafo');
let cont=0;
const p =document.querySelectorAll('.parrafo');
const a=document.querySelector('a');
console.log(p);
p.forEach(x=>{
    x.style.backgroundColor ="#ffd692";
    let ArrayString=String(x.textContent).split(" ");
    cont+=ArrayString.length;
})
console.log(cont);

let mostraCont=document.createElement("p");
mostraCont.textContent="Cantidad de palabras: "+cont;
//document.body.insertAdjacentElement("beforebegin",mostraCont);
document.body.before(mostraCont);  //los 2 andan

a.addEventListener('click',(e)=>{
    e.preventDefault();
    p[0].innerText=a.href;// elijo mostrarla en el primero de los p
})

const img=document.createElement("img");
img.src="descarga.jfif";
document.body.after(img);