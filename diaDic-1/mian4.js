var initialState = {
    usuarios: [{
        correo: "foo@foo.com",
        nombre: "foo",
        edad: "33"
    },
    {
        correo: "qux@qux.com",
        nombre: "qux",
        edad: "22"
    },
    ]
};


function crearPerfil(state, action) {
    let { nombre, correo, edad } = action.payload;
    return {
        ...state,
        usuarios: [...state.usuarios, { correo, nombre, edad }]
    }
}
function modificarPerfinPorCorreo(state, action) {
    return {
        ...state,
        usuarios: [...state.usuarios.map(el => {
            if (el.correo === action.payload.correo) {
                el.nombre = action.payload.nombre;
                el.edad=action.payload.edad;
            }
            return el;
        })]
    }
}
function elimianrCorreo(state, action) {
    return {
        ...state,
        usuarios: [...state.usuarios.filter(el => el.correo !== action.payload.correo)]
    }
}


//defino el funcionamiento del store
function reducer(state = initialState, action) {
    switch (action.type) {
        case "CREAR_PERFIL":
            return crearPerfil(state, action);
        case "MODIFICAR_PERFIL_POR_CORREO":
            return modificarPerfinPorCorreo(state, action);
        case "ELIMINAR_CORREO":
            return elimianrCorreo(state, action);
        default:
            return state;
    }
}

//creo el store
let store = Redux.createStore(reducer);
/*
 store.suscribe()
 store.getState()
 store.dispatch()
 */

function component() {
    document.getElementById("respuesta").innerHTML = JSON.stringify(store.getState());
}

//se registra el elemento/component/dom de escucha
store.subscribe(component);

//se emite la accion
document.getElementById("crear").addEventListener("click", () => {
    store.dispatch(accionCrearPerfil());
});
document.getElementById("modificar_nombre").addEventListener("click", () => {
    store.dispatch(accionModificarNombre());
});
document.getElementById("eliminar_edad").addEventListener("click", () => {
    store.dispatch(accionEliminarEdad());
});

let elCorreo = document.getElementById("correo");
let elNombre = document.getElementById("nombre");
let elEdad = document.getElementById("edad");


//acciones
function accionCrearPerfil() {
    return {
        type: "CREAR_PERFIL",
        payload: {
            correo: elCorreo.value,
            nombre: elNombre.value,
            edad: elEdad.value
        }
    };
}
function accionModificarNombre() {
    return {
        type: "MODIFICAR_PERFIL_POR_CORREO",
        payload: {
            correo: elCorreo.value,
            nombre: elNombre.value,
            edad: elEdad.value
        }
    };
}
function accionEliminarEdad() {
    return {
        type: "ELIMINAR_CORREO",
        payload: {
            correo: elCorreo.value,
        }
    };
}

