import React from "react";
//data
import data from "./mocks/users_mock";
//callbacks
import {userList} from "./callbacks/map_callbacks";
//style
import "./style/users.css"

const Users=()=>{
    return(
        <div className="espacio">
            <h1>Usuarios</h1>
            {data.map(userList)}
        </div>
    )
}


export default Users;