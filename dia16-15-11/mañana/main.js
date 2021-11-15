
/* FETCHHH */
/* const getDataAsync = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        return console.log(data)
        
    } catch (error) {
        console.log(error)
    }
} 
getDataAsync(); */

const boton = document.querySelector('.button');
const input = document.querySelector('.input');
const content= document.querySelector('.content');

content.innerText = 'Hola, como estas';
function changeContent(){
    content.innerText=input.value;
    content.style.background = 'red';
    content.style.color = 'black';
}
if(boton)
{
    boton.addEventListener('click',changeContent);
}
console.log(boton,input);

