import { createStore } from "redux";
let initialState = {
    users: [
        { email: "foo@foo.com", name: "foo", age: 24 },
        { email: "bar@bar.com", name: "bar", age: 30 },
        { email: "qux@qux.com", name: "qux", age: 41 },
    ]
};
const TAGS = {
    GET_USERS: "GET_USERS",
    ADD_USER: "ADD_USER",
    UPDATE_USER:"UPDATE_USER",
    DELETE_USER:"DELETE",
    SEARCH_USER: "SEARCH_USER"
};
/* 
function buscarUser(state,action){
    return(....
}
 */
function reducer(state, action) {
    switch (action.type) {
        case TAGS.GET_USERS:
            return state;
        case TAGS.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            }
        /* case TAGS.SEARCH_USER:
            return buscarUser(state,action); */
        case TAGS.DELETE_USER:
            return {
                ...state,
                users: [...state.users.filter(el => el.email !== action.user.email)]
            }
            
        case TAGS.UPDATE_USER:
            return {
                ...state,
                users: [...state.users.map(el => {
                    if (el.email === action.user.email) {
                        el.name = action.user.name;
                        el.age =action.user.age;
                    }
                    return el;
                })]
            }
            
        default:
            return state;
    }
}
let store = createStore(reducer, initialState);

function actionGetUser() {
    return {
        type: TAGS.GET_USERS
    }
}
function actionAddUser(email, name, age) {
    return {
        type: TAGS.ADD_USER,
        user: {
            name,
            email,
            age
        }
    };
}

function actionDeleteUser(email, name, age) {
    return {
        type: TAGS.DELETE_USER,
        user: {
            email,
        }
    };
}
function actionModifyUser(email, name, age) {
    return {
        type: TAGS.UPDATE_USER,
        user: {
            name,
            email,
            age
        }
    };
}
export {
    TAGS,
    actionGetUser,
    actionAddUser,
    actionDeleteUser,
    actionModifyUser
}
export default store;