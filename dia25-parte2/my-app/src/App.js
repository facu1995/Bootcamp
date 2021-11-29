import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
//components
import Home from "./components/home/";
import About from "./components/about/about"


function App() {
    return (
        <Fragment>
            <div>
                <ol>
                    <li>
                        <Link to="/" >home</Link>
                    </li>
                    <li>
                        <Link to="/about" >about</Link>
                    </li>
                </ol>
            </div>
            <section>
            <Routes>
                    <Route index path="/" element={<Home />}></Route>
                    <Route index path="/about" element={<About />}></Route>
                </Routes>
            </section>
        </Fragment>
    )
}

export default App;

