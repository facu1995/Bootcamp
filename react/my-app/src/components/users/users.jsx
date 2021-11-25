import React,{Fragment} from "react";
import { Routes, Route, Link } from "react-router-dom";
//data
/* import data from "./mocks/users_mock"; */
//callbacks
/* import { userList } from "./callbacks/map_callbacks"; */
//style
import "./style/users.css"
//componets
import AddUser from "./presentational/add_user";
import DeleteUser from "./presentational/delete_user";
import ListUser from "./presentational/list_user";


export default function Users() {
    return (
        <Fragment>
            <div>
                <ol>
                    <li>
                        <Link to="/" >users</Link>
                    </li>
                    <li>
                        <Link to="/add" >add users</Link>
                    </li>
                    <li>
                        <Link to="/delete" >delete users</Link>
                    </li>
                </ol>
            </div>
            <section>
                <Routes>
                    <Route index path="/" element={<ListUser />}></Route>
                    <Route index path="/add" element={<AddUser />}></Route>
                    <Route index path="/delete" element={<DeleteUser />}></Route>
                </Routes>
            </section>
        </Fragment>
    )
}
/* const Users=()=>{
    return(
        <div className="espacio">
            <h1>Usuarios</h1>
            {data.map(userList)}
        </div>
    )
}
 */
/* 
export default Users; */