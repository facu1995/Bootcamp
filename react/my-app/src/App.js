import React,{Fragment} from "react";
/* import Origin from "./components/origin/origin" */
/* import Boot from "./components/boot/boot";
import AddBoot from "./components/boot/AddBooty";
import DeleteBoot from "./components/boot/DeleteBooty";
import UpdateBoot from "./components/boot/UpdateBooty";
import SearchBoot from "./components/boot/SearchBooty";
import { Routes, Route, Link } from "react-router-dom"; */
import Reel from "./components/reel/Reel";
//components
/* import List from "./components/list/list"; */
/* import Users from "./components/users/users"; */
/* import Foo from "./components/foo/foo"; */
/* 
const user = {
    email: "foo@foo.com",
    name: "foo",
    pass: "foo123",
    role:""
} */
function App() {
    return (
        <Fragment>
            <Reel/>
        </Fragment>
    );
}

export default App;


/* <div>
                <ol>
                    <li>
                        <Link to="/" >home</Link>
                    </li>
                    <li>
                        <Link to="/add" >add</Link>
                    </li>
                    <li>
                        <Link to="/delete" >delete</Link>
                    </li>
                    <li>
                        <Link to="/update" >update</Link>
                    </li>
                    <li>
                        <Link to="/search" >search</Link>
                    </li>
                </ol>
            </div>
            <section>
            <Routes>
                    <Route index path="/" element={<Boot />}></Route>
                    <Route index path="/add" element={<AddBoot />}></Route>
                    <Route index path="/delete" element={<DeleteBoot />}></Route>
                    <Route index path="/update" element={<UpdateBoot />}></Route>
                    <Route index path="/search" element={<SearchBoot />}></Route>
                </Routes>
            </section> */