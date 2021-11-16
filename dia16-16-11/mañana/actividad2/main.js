/* 1.
Crear un boton que al ser clickeado muestre/oculte un elemento (toggle)
2.
Crear un <ul>.
Crear un input
Crear un li con el valor del input 
(como si fueran notas que vas agregando)
3.
Usando new Date() insertar en el html el año actual junto a un saludo
4.
Crear un contenedor de 400x400 con 2 botones.
Al ser clickeado el contenedor debe cambiar el background a rojo
Cada boton debe estar dentro del contenedor y al clickear dar un console.log('boton 1/2 se ejecuto')
5.
Crear un form completamente desde javascript
para insertar en nuestro html */

//Elementos que existen
const btn = document.querySelector(".btnVisibilidad");
const span = document.querySelector(".span");
const container = document.querySelector(".container")

function cambiarVisibilidad() {
    const result = span.classList.toggle("activo");
    if (result) {
        span.textContent = "Elemento"
    }
    else {
        span.textContent = ""
    }
}
btn.addEventListener("click", cambiarVisibilidad);

//Elementos Creados

const ul = document.createElement("ul");
container.appendChild(ul);
const input = document.createElement("input");
container.appendChild(input);
const btonAdd = document.createElement("button");
btonAdd.textContent = "Agregar li";
container.appendChild(btonAdd);

function agregarLi() {
    if (input.value.trim().length != 0) {
        let li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
    }
}
btonAdd.addEventListener("click", agregarLi);

let año = new Date();
const añoHtml = document.createElement("p");
añoHtml.textContent = "Hola, el año actual es: " + año.getFullYear();
container.appendChild(añoHtml);

let contenedor = document.createElement("div");
container.appendChild(contenedor);
contenedor.style.width = "400px";
contenedor.style.height = "400px";
contenedor.style.border = "1px solid black";// agrege para que sea visible
contenedor.addEventListener("click", () => contenedor.style.background = "red");
let btn1 = document.createElement("button");
btn1.textContent = "Boton1";
contenedor.appendChild(btn1);
let btn2 = document.createElement("button");
btn2.textContent = "Boton2";
contenedor.appendChild(btn2);

btn1.addEventListener("click", () => console.log("boton1 se ejectuo"));
btn2.addEventListener("click", () => console.log("boton2 se ejectuo"));

const form = document.createElement("form");
container.appendChild(form);
const labelNombre = document.createElement("label");
form.appendChild(labelNombre);
labelNombre.textContent = "Nombre:";
const inputNombre = document.createElement("input");
form.appendChild(inputNombre);
const labelApellido = document.createElement("label");
form.appendChild(labelApellido);
labelApellido.textContent = "Apellido:";
const inputApellido = document.createElement("input");
form.appendChild(inputApellido);
form.style.width = "250px"
//form.style.display = "flex";
//form.style.flex.direction = "column";
const labelMail = document.createElement("label");
form.appendChild(labelMail);
labelMail.textContent = "Mail:";
const inputMail = document.createElement("input");
form.appendChild(inputMail);
const btnEnviar = document.createElement("button");
btnEnviar.textContent = "Enviar";
form.appendChild(btnEnviar);