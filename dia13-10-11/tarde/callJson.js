let base ="https://rickandmortyapi.com/api"
let character = "/character/2"
let endpoint = base.concat(character)
console.log(endpoint)

fetch(endpoint).
then(response => response.json()).then(json => console.log(json)).catch(error => console.error('Error: no match', error))
  .finally( () => console.log('finally'))