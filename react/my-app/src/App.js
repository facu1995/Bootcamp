import React, { Fragment } from "react";
//components
/* import List from "./components/list/list"; */
/* import Users from "./components/users/users"; */
import Foo from "./components/foo/foo";

const user = {
    email: "foo@foo.com",
    name: "foo",
    pass: "foo123",
    role:""
}
function App() {
    return (
        <Fragment>
            {/* <Users/> */}
            <Foo
                {...user}
                
            />
        </Fragment>
    );
}

export default App;
