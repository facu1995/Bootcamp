
/**
 * con esto defino mi "bolsa" de redux
 * @param {*} state es el estado
 * @param {*} action la accion que hace
 */



let initialState = 0;


//defino el funcionamiento del store
function reducer(state = initialState, action) {

    switch (action.type) {
        case "sumar":
            return state + 1;
        case "restar":
            return state - 1;
        default:
            return state;
    }
}
//creo el store que funcione bajo la funcion que cree
let store = Redux.createStore(reducer);



/* 
store.subscribe()
store.getState()
store.dispath()
*/

//asigo un elemento HTML q muestre el valor del store
function component() {
    document.getElementById("respuesta").innerHTML = store.getState();//Muestra el valor de getState() osea el contenido 
}

//se registra el elemento/compont/dom de escucha
store.subscribe(component); ///me subscribo a escuchar el componente 
document.getElementById("sumar").addEventListener("click", () => {
    //genero la accion, va con type siempre 
    store.dispatch(accionSumar());
})
document.getElementById("restar").addEventListener("click", () => {
    store.dispatch(accionRestar());
})

//aciones
function accionSumar() {
    return {
        type: "sumar"
    }
}

function accionRestar() {
    return {
        type: "restar"
    }
}