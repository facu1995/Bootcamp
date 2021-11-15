/* const axios = require("axios");

//CLIENTE HTTP PERSONALIZADO
const pokeHTTP = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});


pokeHTTP.get("/pokemon/1")
.then(res=>console.log("pokemon: ",res.data.forms[0].name)) */

const axios = require("axios");
//CLIENTE HTTP PERSONALIZADO
const placeholderHTTP = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});
const searchId =(nro)=> ({
  params: {
    id: nro
  }
});
placeholderHTTP.get("/todos", searchId(5))
.then(res=>console.log("placeholder: ",res.data))
.catch(err=>console.log(err))